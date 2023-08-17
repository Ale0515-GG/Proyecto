import {Request, Response } from 'express';

import pool from '../database';

class CitaController {
    public async list (req: Request, res: Response){
         const result =  await pool.then(async (connection)=> {
             return await connection.query(
                 "SELECT * FROM Cita"
             );
        })   
         res.json(result);
    }

    public async select(req:Request,res:Response):Promise<any>{
        const {id}=req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'SELECT * FROM Cita WHERE id=?',[id]
            );
        })
        if (result.length >0){
            return res.json(result[0]); //revuelve al cliente
        }
        console.log(result);
        res.status(404).json({text:'El Cita no existe'});//codigo de estado
    }

        public async create (req:Request, res:Response): Promise<void>{
        //console.log(req.body)
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'INSERT INTO Cita set ?',[req.body]
            );
        })
    
        res.json({texto:"Cita Saved"});
    
    }

    public async delete(req:Request,res:Response):Promise<any>{
        const {id}=req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'DELETE FROM Cita WHERE IdCita=?',[id]
            );
        })
        res.json({text:"Cita "+req.params.id+" was deleted"});
        // res.json({text:"deleting cita"});
    }

    public async update(req:Request,res:Response):Promise<void>{
        const { id } = req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'UPDATE Cita SET ? WHERE IdCita = ?', [req.body, id]
            );
        });
        res.json({ text: "Cita " + req.params.id + " was updated" });
    }        

    public async setp(req: Request, res: Response): Promise<any> {
        const { telefono } = req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'SELECT * FROM Paciente as P WHERE P.Telefono = telefono = ?', [telefono]
            );
        });
        if (result.length > 0) {
            return res.json(result[0]); // devuelve al cliente
        }
        console.log(result);
        res.status(404).send('El Paciente no existe'); // mensaje en el navegador
    }
    

}

export const citaController = new CitaController()