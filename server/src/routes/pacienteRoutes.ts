import { Router } from "express"; //objeto
import {pacienteController} from "../controllers/pacienteController";

class PacienteRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //this.router.get('/',pacienteController.index); //ruta inicial
        this.router.get('/',pacienteController.list);
        this.router.post('/',pacienteController.create);
        this.router.put('/:id',pacienteController.update);
        this.router.delete('/:id',pacienteController.delete);
        this.router.get('/:id',pacienteController.select);
    }
}
const  pacienteRoutes = new PacienteRoutes();
export default pacienteRoutes.router;