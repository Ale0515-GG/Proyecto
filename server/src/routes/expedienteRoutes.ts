import { Router } from "express"; //objeto
import {expedienteController} from "../controllers/expedienteController";
class ExpedienteRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',expedienteController.list); //ruta inicial
        this.router.post('/',expedienteController.create);
        this.router.put('/:id',expedienteController.update);
        this.router.delete('/:id',expedienteController.delete);
        this.router.get('/:id',expedienteController.select);
    }
}
const  expedienteRoutes = new ExpedienteRoutes();
export default expedienteRoutes.router;