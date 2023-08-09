import {Request, Response } from 'express';

import pool from '../database';

class MedicoController {
    public async list (req: Request, res: Response){
         const result =  await pool.then(async (connection)=> {
             return await connection.query(
                "SELECT * FROM Medico"
             );
        })   
         res.json(result);
    }

    public async select(req:Request,res:Response):Promise<any>{
        const {id}=req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'SELECT * FROM Medico WHERE id=?',[id]
            );
        })
        if (result.length >0){
            return res.json(result[0]); //revuelve al cliente
        }
        console.log(result);
        res.status(404).json({text:'El Medico no existe'});//codigo de estado
    }

    public async create (req:Request, res:Response): Promise<void>{
        //console.log(req.body)
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'INSERT INTO Medico set ?',[req.body]
            );
        })
    
        res.json({texto:"Medico Saved"});
    
    }

    public async delete(req:Request,res:Response):Promise<any>{
        const {id}=req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'DELETE FROM Medico WHERE id=?',[id]
            );
        })
        res.json({text:"Medico "+req.params.id+" was deleted"});
    }

    public async update(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'UPDATE Medico SET ? WHERE id=?',[req.body,id]//el primer ? va con el req.body los que se van a editar  y el segundo con id(idPaciente)
            );
        })
        res.json({text:"Medico "+req.params.id+" was updated"});
    }
}

export const medicoController = new MedicoController()