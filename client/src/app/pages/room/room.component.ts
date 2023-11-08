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
        rommName: this.roomName
      };
      console.log('ID PEER:', id);
  
      // this.webSocketService.joinRoom(body);
    });
    // Define la respuesta de la llamada
    peer.on('call', (callEnter: MediaConnection) => {
      callEnter.answer(this.currentScream); // Corregido el argumento a 'stream'
      callEnter.on('stream', (streamRemote: MediaStream) => {
        // Ahora callEnter y streamRemote tienen tipos definidos.
        // Puedes acceder a las propiedades y métodos específicos de esos tipos.
      });
    });
  }
  
  initSocket = () => {
    this.webSocketService.cbEvent.subscribe((res) => {
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
        this.addVideo(stream);
        this.currentScream=stream;
        this.addVideo(stream);
      }).catch(()=>{
        console.log('*** ERROR *** Not Permisos');
      });
    }else{
      console.log('*** ERROR *** Not media Devices');
    }
  }

  addVideo = (stream: any) =>{
    this.listUser.push(stream);
  }

}
