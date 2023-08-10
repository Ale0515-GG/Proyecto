import { Router } from "express"; //objeto
import {citaController} from "../controllers/citaController";
class CitaRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',citaController.list); //ruta inicial
        this.router.post('/',citaController.create);
        this.router.put('/:id',citaController.update);
        this.router.delete('/:id',citaController.delete);
        this.router.get('/:id',citaController.select);
    }
}
const  citaRoutes = new CitaRoutes();
export default citaRoutes.router;