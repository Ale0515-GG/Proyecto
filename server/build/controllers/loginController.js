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
exports.loginController = void 0;
const database_1 = __importDefault(require("../database"));
class LoginController {
    /*public async list (req: Request, res: Response){
         const result =  await pool.then(async (connection)=> {
             return await connection.query(
                "SELECT * FROM Login"
             );
        })
         res.json(result);
    }*/
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("SELECT * FROM Login");
            }));
            resp.json(result);
        });
    }
    // public async create(req : Request, resp: Response):Promise<void>{
    //     const { confirmPassword, ...cuentaData } = req.body; // Exclude confirmPassword property
    //     console.log(cuentaData);
    //     await pool.query('INSERT INTO cuentas set ?', [cuentaData]);
    //     resp.json({ message: 'Cuenta Guardada' });
    // }
    // public async delete(req: Request, resp: Response){
    //     const {cveUser}= req.params;
    //     await pool.query('DELETE FROM cuentas WHERE cveUser=?',[cveUser])
    //     resp.json({message: 'la cuenta fue eliminada'});
    // }
    //  public async update(req: Request, resp: Response){
    //          const {cveUser}= req.params;
    //         await pool.query('UPDATE cuentas set? WHERE cveUser=?',[req.body,cveUser]);
    //      resp.json({message: 'Actualizando cuenta'});
    //      }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Correo, Contrasena } = req.params;
            const registro = yield database_1.default.then((connection) => __awaiter(this, void 0, void 0, function* () {
                return yield connection.query("SELECT * FROM Login WHERE Correo = ? and Contrasena = ?", [Correo, Contrasena]);
            }));
            if (registro.length > 0) {
                return resp.json(registro[0]);
            }
            resp.status(404).json({ text: "El usuario no existe" });
        });
    }
}
exports.loginController = new LoginController();
exports.default = exports.loginController;
