import {Request, Response } from 'express';

import pool from '../database';

class ExpedienteController {
    public async list (req: Request, res: Response){
         const result =  await pool.then(async (connection)=> {
             return await connection.query(
                 "SELECT * FROM Expediente"
             );
        })   
         res.json(result);
    }

    public async select(req:Request,res:Response):Promise<any>{
        const {id}=req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'SELECT * FROM Expediente WHERE id=?',[id]
            );
        })
        if (result.length >0){
            return res.json(result[0]); //revuelve al cliente
        }
        console.log(result);
        res.status(404).json({text:'El Expediente no existe'});//codigo de estado
    }

        public async create (req:Request, res:Response): Promise<void>{
        //console.log(req.body)
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'INSERT INTO Expediente set ?',[req.body]
            );
        })
    
        res.json({texto:"Expediente Saved"});
    
    }

    public async delete(req:Request,res:Response):Promise<any>{
        const {id}=req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'DELETE FROM Expediente WHERE id=?',[id]
            );
        })
        res.json({text:"Expediente "+req.params.id+" was deleted"});
        // res.json({text:"deleting Expediente"});
    }

    public async update(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'UPDATE Expediente SET ? WHERE id=?',[req.body,id]//el primer ? va con el req.body los que se van a editar  y el segundo con id(idPaciente)
            );
        })
        res.json({text:"Expediente "+req.params.id+" was updated"});
    }

}

export const expedienteController = new ExpedienteController()