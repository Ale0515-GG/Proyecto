"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expedienteController = void 0;
const database_1 = __importDefault(require("../database"));
class ExpedienteController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("SELECT * FROM Expediente");
            }));
            res.json(result);
        });
    }
    select(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query('SELECT * FROM Expediente WHERE idExpediente =?', [id]);
            }));
            if (result.length > 0) {
                return res.json(result[0]); //revuelve al cliente
            }
            console.log(result);
            res.status(404).json({ text: 'El Expediente no existe' }); //codigo de estado
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body)
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query('INSERT INTO Expediente set ?', [req.body]);
            }));
            res.json({ texto: "Expediente Saved" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query('DELETE FROM Expediente WHERE idExpediente=?', [id]);
            }));
            res.json({ text: "Expediente " + req.params.id + " was deleted" });
            // res.json({text:"deleting Expediente"});
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query('UPDATE Expediente SET ? WHERE idExpediente=?', [req.body, id] //el primer ? va con el req.body los que se van a editar  y el segundo con id(idPaciente)
                );
            }));
            res.json({ text: "Expediente " + req.params.id + " was updated" });
        });
    }
}
exports.expedienteController = new ExpedienteController();
