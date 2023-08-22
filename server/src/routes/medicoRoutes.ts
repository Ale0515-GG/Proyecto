import { Router } from "express"; //objeto
import {medicoController} from "../controllers/medicoController";
class MedicoRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', medicoController.list);
        this.router.post('/', medicoController.create);
        this.router.put('/:id', medicoController.update);
        this.router.delete('/:id', medicoController.delete);
        this.router.get('/:id', medicoController.select);
        this.router.get('/search', medicoController.searchByName); 
    }
}
const  medicoRoutes = new MedicoRoutes();
export default medicoRoutes.router; 
