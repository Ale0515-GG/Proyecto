import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeerService } from 'src/app/peer.service';
import { WebSocketService } from 'src/app/web-socket.service';
import { stream } from 'xlsx';
import { MediaConnection } from 'peerjs';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit{

  roomName: string;
  currentScream:any;
  listUser:Array<any>=[];

  constructor(private route: ActivatedRoute, private webSocketService: WebSocketService, private peerService: PeerService) {
    this.roomName = route.snapshot.paramMap.get('id') || ''; // Usar '' como valor predeterminado si 'id' es nulo
    console.log('-->', this.roomName);
  }
  

  ngOnInit(): void {
    this.checkMediaDevices();
    this.initPeer();
    this.initSocket();
  }

  //caundo este activo
  initPeer = () => {
    const peer = this.peerService.peer; // Accede a la instancia de Peer
    peer.on('open', (id: string) => {
      const body = {
        idPeer: id,
        roomName: this.roomName
      };
      console.log('ID PEER:', id);
  
      this.webSocketService.joinRoom(body);
    });
    peer.on('call', (callEnter: MediaConnection) => { // Reemplaza 'TipoDeCallEnter' con el tipo correcto
      callEnter.answer(this.currentScream);
      callEnter.on('stream', (streamRemote: MediaStream) => { // Reemplaza 'TipoDeStream' con el tipo correcto
        this.addVideoUser(streamRemote);
      });
    });
  }
  
  
  initSocket = () => {
    this.webSocketService.cbEvent.subscribe((res) => {
      if(res.name === 'new-user'){
        const {idPeer} = res.data;
        console.log(idPeer)
        this.sendCall(idPeer, this.currentScream)
      }
      console.log('SOCKET', res);
    });
  }
  
  
  

  checkMediaDevices = () =>{
    if(navigator && navigator.mediaDevices){
      navigator.mediaDevices.getUserMedia({
        audio : true,
        video : true
      }).then(stream=>{
        //muestra camara por usuario
        this.currentScream=stream;
        this.addVideoUser(stream);
        this.currentScream=stream;
        this.addVideoUser(stream);
      }).catch(()=>{
        console.log('*** ERROR *** Not Permisos');
      });
    }else{
      console.log('*** ERROR *** Not media Devices');
    }
  }

  addVideoUser = (stream: any) =>{
    this.listUser.push(stream);
    const unique = new Set(this.listUser);
    this.listUser=[...unique]
  }

  sendCall = (idPeer: string, stream: MediaStream) => {
    const newUserCall = this.peerService.call(idPeer, stream);
    if (!!newUserCall) {
      newUserCall.on('stream', (userStream: MediaStream) => {
        this.addVideoUser(userStream);
      });
    }
  }
  

}
