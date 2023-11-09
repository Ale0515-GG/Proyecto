"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const morgan_1 = require("morgan");
const cors_1 = require("cors");
const http_1 = require("http");
const socket_io_1 = require("socket.io"); // Importa Socket para definir el tipo de 'socket'
const indexRoutes_1 = require("./routes/indexRoutes");
const pacienteRoutes_1 = require("./routes/pacienteRoutes");
const medicoRoutes_1 = require("./routes/medicoRoutes");
const citaRoutes_1 = require("./routes/citaRoutes");
const expedienteRoutes_1 = require("./routes/expedienteRoutes");
const loginRoutes_1 = require("./routes/loginRoutes");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.server = (0, http_1.createServer)(this.app);
        this.io = new socket_io_1.Server(this.server);
        this.config();
        this.routes();
        this.sockets();
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
    sockets() {
        this.io.on("connection", (socket) => {
            console.log("Un usuario se ha conectado");
            socket.on("join", (data) => {
                const roomName = data.roomName;
                socket.join(roomName);
                socket.to(roomName).broadcast.emit("new-user", data);
                console.log("Usuario conectado", data);
                socket.on("disconnect", () => {
                    socket.to(roomName).broadcast.emit("bye-user", data);
                });
            });
        });
    }
    start() {
        this.server.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
