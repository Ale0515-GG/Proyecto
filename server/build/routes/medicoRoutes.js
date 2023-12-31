"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //objeto
const medicoController_1 = require("../controllers/medicoController");
class MedicoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', medicoController_1.medicoController.list);
        this.router.post('/', medicoController_1.medicoController.create);
        this.router.put('/:id', medicoController_1.medicoController.update);
        this.router.delete('/:id', medicoController_1.medicoController.delete);
        this.router.get('/:id', medicoController_1.medicoController.select);
        this.router.get('/search', medicoController_1.medicoController.searchByName);
    }
}
const medicoRoutes = new MedicoRoutes();
exports.default = medicoRoutes.router;
