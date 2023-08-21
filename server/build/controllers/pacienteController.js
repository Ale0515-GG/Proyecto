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
exports.pacienteController = void 0;
const database_1 = __importDefault(require("../database"));
class PacienteController {
    /*public async index (req: Request, res: Response){
         const result =  await pool.then(async (connection)=> {
      return await connection.query(
          "describe Paciente"
       );
    })
     res.json(result);*/
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({text:"Listing paciente:"+req.params.id})
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("SELECT * FROM Paciente");
            }));
            res.json(result);
        });
    }
    select(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Nombre } = req.params;
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query('SELECT * FROM Paciente WHERE Nombre=?', [Nombre]);
            }));
            if (result.length > 0) {
                return res.json(result[0]); //revuelve al cliente
            }
            console.log(result);
            res.status(404).json({ text: 'El Paciente no existe' }); //codigo de estado
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body)
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query('INSERT INTO Paciente set ?', [req.body]);
            }));
            res.json({ texto: "Paciente Saved" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query('DELETE FROM Paciente WHERE id=?', [id]);
            }));
            res.json({ text: "Paciente " + req.params.id + " was deleted" });
            // res.json({text:"deleting paciente"});
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Nombre } = req.params;
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query('UPDATE Paciente SET ? WHERE Nombre=?', [req.body, Nombre] //el primer ? va con el req.body los que se van a editar  y el segundo con id(idPaciente)
                );
            }));
            res.json({ text: "Paciente " + req.params.id + " was updated" });
        });
    }
}
exports.pacienteController = new PacienteController();
exports.default = exports.pacienteController;
