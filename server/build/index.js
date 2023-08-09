"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Servidor
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//Pagina
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const pacienteRoutes_1 = __importDefault(require("./routes/pacienteRoutes"));
const medicoRoutes_1 = __importDefault(require("./routes/medicoRoutes"));
const citaRoutes_1 = __importDefault(require("./routes/citaRoutes"));
const expedienteRoutes_1 = __importDefault(require("./routes/expedienteRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
// console.log("Serve");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config(); //configura app
        this.routes(); //rutas
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); //puerto 3000
        this.app.use((0, morgan_1.default)('dev')); //ver las peticiones cuando alguien entre a una ruta
        this.app.use((0, cors_1.default)()); //pedir datos
        this.app.use(express_1.default.json()); //entender los fomratos json
        this.app.use(express_1.default.urlencoded({ extended: false })); //enviar datos desde un fromulario html
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/paciente', pacienteRoutes_1.default);
        this.app.use('/api/medico', medicoRoutes_1.default);
        this.app.use('/api/cita', citaRoutes_1.default);
        this.app.use('/api/expediente', expedienteRoutes_1.default);
        this.app.use('/api/login', loginRoutes_1.default);
    }
    //para iniciar el servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port')); //si se conecta nos manda el mensaje
        });
    }
}
const server = new Server();
server.start();
