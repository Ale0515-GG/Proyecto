"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //objeto
const loginController_1 = require("../controllers/loginController");
class LoginRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:Correo/:Contrasena', loginController_1.loginController.getOne);
        this.router.get('/', loginController_1.loginController.list); //ruta inicial
    }
}
const loginRoutes = new LoginRoutes();
exports.default = loginRoutes.router;
