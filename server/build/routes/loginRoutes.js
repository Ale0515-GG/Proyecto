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
        this.router.get('/', loginController_1.loginController.list); //ruta inicial
        this.router.post('/', loginController_1.loginController.create);
        this.router.put('/:id', loginController_1.loginController.update);
        this.router.delete('/:id', loginController_1.loginController.delete);
        this.router.get('/:id', loginController_1.loginController.select);
    }
}
const loginRoutes = new LoginRoutes();
exports.default = loginRoutes.router;
