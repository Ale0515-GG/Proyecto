import { Injectable } from '@angular/core';
import Peer from 'peerjs';

//libreria rutas
@Injectable({
  providedIn: 'root'
})
export class PeerService {
 
  peer: any;
  constructor() { 
    this.peer = new Peer('miIdentificador', {
      host: 'localhost', 
      port: 3001,        
   });
   
  }
}
