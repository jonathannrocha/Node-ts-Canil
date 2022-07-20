import { Request, Response } from 'express';
import { createMenu } from '../helpers/creatMenu';
import { pet } from '../models/pets'


export const search = ( req: Request, res: Response) => {
    let query:string = req.query.q as string;
    let list = pet.getFromName(query);

    res.render('pages/page',{
        menu: createMenu(''),
        list,
        query
    })
}

