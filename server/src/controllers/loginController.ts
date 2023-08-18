import {Request, Response } from 'express';

import pool from '../database';

class LoginController {
    public async list (req: Request, res: Response){
         const result =  await pool.then(async (connection)=> {
             return await connection.query(
                "SELECT * FROM Login"
             );
        })   
         res.json(result);
    }

    public async select(req:Request,res:Response):Promise<any>{
        const {id}=req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'SELECT * FROM Login WHERE id=?',[id]
            );
        })
        if (result.length >0){
            return res.json(result[0]); //revuelve al cliente
        }
        console.log(result);
        res.status(404).json({text:'El Login no existe'});//codigo de estado
    }

    public async create (req:Request, res:Response): Promise<void>{
        //console.log(req.body)
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'INSERT INTO Login set ?',[req.body]
            );
        })
    
        res.json({texto:"Login Saved"});
    
    }

    public async delete(req:Request,res:Response):Promise<any>{
        const {id}=req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'DELETE FROM Login WHERE id=?',[id]
            );
        })
        res.json({text:"Login "+req.params.id+" was deleted"});
    }

    public async update(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'UPDATE Login SET ? WHERE id=?',[req.body,id]//el primer ? va con el req.body los que se van a editar  y el segundo con id(idPaciente)
            );
        })
        res.json({text:"Login "+req.params.id+" was updated"});
    }

    public async validateCredentials(req:Request,res:Response):Promise<any>{
        const { email, password } = req.body;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'SELECT * FROM Login WHERE Correo = ? AND Contrasena = ?',[email, password]
            );
        })
        if (result.length > 0) {
            res.status(200).json({ success: true });
          } else {
            res.status(404).json({ success: false });
          }
        console.log(result);
        res.status(404).json({text:'El Login no existe'});//codigo de estado
    }






}




export const loginController = new LoginController()