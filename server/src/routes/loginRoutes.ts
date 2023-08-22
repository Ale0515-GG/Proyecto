import { Router } from "express"; //objeto
import {loginController} from "../controllers/loginController";

class LoginRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',loginController.list); //ruta inicial
        this.router.post('/',loginController.create);
        this.router.put('/:id',loginController.update);
        this.router.delete('/:id',loginController.delete);
        this.router.get('/:id',loginController.select);
    }
}


const  loginRoutes = new LoginRoutes();
export default loginRoutes.router;