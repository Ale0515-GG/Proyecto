import {Request, Response, request } from 'express';

import pool from '../database';

class PacienteController {
      /*public async index (req: Request, res: Response){
           const result =  await pool.then(async (connection)=> {
        return await connection.query(
            "describe Paciente"
         );
      })   
       res.json(result);*/

       public async list(req:Request,res:Response){
        // res.json({text:"Listing paciente:"+req.params.id})
        const result = await pool.then(async (connection) => {
            return await connection.query(
                "SELECT * FROM Paciente"
            );
        })
        res.json(result);
    }

    public async select(req:Request,res:Response):Promise<any>{
        const {Nombre}=req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'SELECT * FROM Paciente WHERE Nombre=?',[Nombre]
            );
        })
        if (result.length >0){
            return res.json(result[0]); //revuelve al cliente
        }
        console.log(result);
        res.status(404).json({text:'El Paciente no existe'});//codigo de estado
    }

        public async create (req:Request, res:Response): Promise<void>{
        //console.log(req.body)
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'INSERT INTO Paciente set ?',[req.body]
            );
        })
    
        res.json({texto:"Paciente Saved"});
    
    }

    public async delete(req:Request,res:Response):Promise<any>{
        const {id}=req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'DELETE FROM Paciente WHERE id=?',[id]
            );
        })
        res.json({text:"Paciente "+req.params.id+" was deleted"});
        // res.json({text:"deleting paciente"});
    }

    public async update(req:Request,res:Response):Promise<void>{
        const {Nombre}=req.params;
        const result = await pool.then(async (connection) => {
            return await connection.query(
                'UPDATE Paciente SET ? WHERE Nombre=?',[req.body,Nombre]//el primer ? va con el req.body los que se van a editar  y el segundo con id(idPaciente)
            );
        })
        res.json({text:"Paciente "+req.params.id+" was updated"});
    }


    }


export const pacienteController = new PacienteController();
export default pacienteController;