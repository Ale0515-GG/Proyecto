"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //objeto
const pacienteController_1 = require("../controllers/pacienteController");
class PacienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/',pacienteController.index); //ruta inicial
        this.router.get('/', pacienteController_1.pacienteController.list);
        this.router.post('/', pacienteController_1.pacienteController.create);
        this.router.put('/:id', pacienteController_1.pacienteController.update);
        this.router.delete('/:id', pacienteController_1.pacienteController.delete);
        this.router.get('/:id', pacienteController_1.pacienteController.select);
    }
}
const pacienteRoutes = new PacienteRoutes();
exports.default = pacienteRoutes.router;
