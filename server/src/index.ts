import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import { createServer } from "http";

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

  constructor() {
    this.app = express();
    this.server = createServer(this.app);
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors({
      origin: "http://localhost:4200",
      methods: ["GET", "POST"],
      credentials: true,
  }));
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
  }

  public start(): void {
    this.server.listen(this.app.get("port"), () => {
      console.log("Server on port", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
