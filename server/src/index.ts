//Servidor
import express,{Application, Router} from 'express';
import morgan from 'morgan';
import cors from 'cors';
//Pagina
import indexRoutes from './routes/indexRoutes';
import pacienteRoutes from './routes/pacienteRoutes';
import medicoRoutes from './routes/medicoRoutes';
import citaRoutes from './routes/citaRoutes';
import expedienteRoutes from './routes/expedienteRoutes';
import loginRoutes from './routes/loginRoutes';

// console.log("Serve");

class Server{
    public app: Application;

    constructor(){ 
        this.app = express();
        this.config();//configura app
        this.routes();//rutas
    }

    config():void{
        this.app.set('port',process.env.PORT || 3000);//puerto 3000
        this.app.use(morgan('dev'));//ver las peticiones cuando alguien entre a una ruta
        this.app.use(cors());//pedir datos
        this.app.use(express.json());//entender los fomratos json
        this.app.use(express.urlencoded({extended: false}))//enviar datos desde un fromulario html
    }

    routes():void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/paciente',pacienteRoutes);
        this.app.use('/api/medico',medicoRoutes);
        this.app.use('/api/cita',citaRoutes);
        this.app.use('/api/expediente',expedienteRoutes);
        this.app.use('/api/login',loginRoutes);



    }

    //para iniciar el servidor
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on port',this.app.get('port'));//si se conecta nos manda el mensaje
        });
    }
}

const server = new Server();
server.start();