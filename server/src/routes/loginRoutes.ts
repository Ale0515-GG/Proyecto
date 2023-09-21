import { Router } from "express"; //objeto
import {loginController} from "../controllers/loginController";

class LoginRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/:Correo/:Contrasena', loginController.getOne);
        this.router.get('/',loginController.list); //ruta inicial
    }
}


const  loginRoutes = new LoginRoutes();
export default loginRoutes.router;