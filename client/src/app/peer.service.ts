import { Injectable } from '@angular/core';
import Peer from 'peerjs';

@Injectable({
  providedIn: 'root'
})
export class PeerService {
  peer: any;

  constructor() { 
    this.peer = new Peer('undefined', {
      host: 'localhost', 
      port: 3001,        
    });
  }

  // Función para realizar una llamada
  call(idPeer: string, stream: MediaStream) {
    if (this.peer) {
      const call = this.peer.call(idPeer, stream);
      return call;
    } else {
      console.error('Peer instance not initialized.');
      return null;
    }
  }

  // Otras configuraciones y métodos relacionados con PeerService
}

