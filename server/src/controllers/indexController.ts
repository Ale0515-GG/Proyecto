import {Request, Response } from 'express';

class IndexController {
    index (req: Request,res:Response) {
        res.json ({text: 'API is /api/paciente'});
    }
}

export const indexController = new IndexController()