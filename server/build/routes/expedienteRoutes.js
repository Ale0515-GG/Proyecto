"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //objeto
const expedienteController_1 = require("../controllers/expedienteController");
class ExpedienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', expedienteController_1.expedienteController.list); //ruta inicial
        this.router.post('/', expedienteController_1.expedienteController.create);
        this.router.put('/:id', expedienteController_1.expedienteController.update);
        this.router.delete('/:id', expedienteController_1.expedienteController.delete);
        this.router.get('/:id', expedienteController_1.expedienteController.select);
    }
}
const expedienteRoutes = new ExpedienteRoutes();
exports.default = expedienteRoutes.router;
