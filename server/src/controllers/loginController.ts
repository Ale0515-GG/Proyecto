import {Request, Response } from 'express';
import pool from '../database';

class LoginController {

    /*public async list (req: Request, res: Response){
         const result =  await pool.then(async (connection)=> {
             return await connection.query(
                "SELECT * FROM Login"
             );
        })   
         res.json(result);
    }*/

    public async list(req : Request, resp : Response){
        const result = await pool.then(async (connection)=>{
            return await connection.query(
            "SELECT * FROM Login"
        );
    })
        resp.json(result);
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


    public async getOne(req: Request, resp: Response){
        const {Correo, Contrasena}= req.params;
        const registro = await pool.then(async (connection)=>{
            return await connection.query(
            "SELECT * FROM Login WHERE Correo = ? and Contrasena = ?",
            [Correo, Contrasena]
            );
        })
        if(registro.length > 0){
            return resp.json(registro[0]);
        }
        resp.status(404).json({text: "El usuario no existe"})
    }
}



export const loginController = new LoginController()
export default loginController;