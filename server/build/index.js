"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const pacienteRoutes_1 = __importDefault(require("./routes/pacienteRoutes"));
const medicoRoutes_1 = __importDefault(require("./routes/medicoRoutes"));
const citaRoutes_1 = __importDefault(require("./routes/citaRoutes"));
const expedienteRoutes_1 = __importDefault(require("./routes/expedienteRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
class Server {
    //private io: SocketIOServer;
    constructor() {
        this.app = (0, express_1.default)();
        this.server = (0, http_1.createServer)(this.app);
        //this.io = new SocketIOServer(this.server);
        this.config();
        this.routes();
        //this.sockets();
    }
    config() {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use("/", indexRoutes_1.default);
        this.app.use("/api/paciente", pacienteRoutes_1.default);
        this.app.use("/api/medico", medicoRoutes_1.default);
        this.app.use("/api/cita", citaRoutes_1.default);
        this.app.use("/api/expediente", expedienteRoutes_1.default);
        this.app.use("/api/login", loginRoutes_1.default);
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
    start() {
        this.server.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
