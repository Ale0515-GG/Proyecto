import { Router } from "express"; //objeto
import { indexController } from "../controllers/indexController";

class IndexRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',indexController.index); //ruta inicial ejecuta el index controller
    }
}
const  indexRoutes = new IndexRoutes();
export default indexRoutes.router;