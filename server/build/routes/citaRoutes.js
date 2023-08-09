"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //objeto
const citaController_1 = require("../controllers/citaController");
class CitaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', citaController_1.citaController.list); //ruta inicial
        this.router.post('/', citaController_1.citaController.create);
        this.router.put('/:id', citaController_1.citaController.update);
        this.router.delete('/:id', citaController_1.citaController.delete);
        this.router.get('/:id', citaController_1.citaController.select);
    }
}
const citaRoutes = new CitaRoutes();
exports.default = citaRoutes.router;
