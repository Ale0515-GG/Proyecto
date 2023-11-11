import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import { createServer } from "http";
//import { Server as SocketIOServer, Socket } from "socket.io"; 
import * as io from "socket.io-client"


import indexRoutes from "./routes/indexRoutes";
import pacienteRoutes from "./routes/pacienteRoutes";
import medicoRoutes from "./routes/medicoRoutes";
import citaRoutes from "./routes/citaRoutes";
import expedienteRoutes from "./routes/expedienteRoutes";
import loginRoutes from "./routes/loginRoutes";

interface UserData {
    roomName: string;

  }
class Server {
  private app: Express;
  private server: any;
  //private io: SocketIOServer;

  constructor() {
    this.app = express();
    this.server = createServer(this.app);
    //this.io = new SocketIOServer(this.server);
    this.config();
    this.routes();
    //this.sockets();
  }

  private config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private routes(): void {
    this.app.use("/", indexRoutes);
    this.app.use("/api/paciente", pacienteRoutes);
    this.app.use("/api/medico", medicoRoutes);
    this.app.use("/api/cita", citaRoutes);
    this.app.use("/api/expediente", expedienteRoutes);
    this.app.use("/api/login", loginRoutes);
    //this.app.use('/api/mapa',mapaRoutes);
  }

  /*private sockets(): void {
    this.io.on("connection", (socket: Socket) => {
      console.log("Un usuario se ha conectado");

      socket.on("join", (data: UserData) => {
        const roomName = data.roomName;
        socket.join(roomName);
        socket.to(roomName).broadcast.emit("new-user", data);
        console.log("Usuario conectado", data);

        socket.on("disconnect", () => {
          socket.to(roomName).broadcast.emit("bye-user", data);
        });
      });
    });
  }*/

  public start(): void {
    this.server.listen(this.app.get("port"), () => {
      console.log("Server on port", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
