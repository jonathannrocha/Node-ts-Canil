import { Request, Response } from 'express';
import { createMenu } from '../helpers/creatMenu';
import { pet } from '../models/pets'

export const home = ( req: Request, res: Response) => {
    const list = pet.getAll();

    res.render('pages/page',{
        menu: createMenu('all'),
        banner: {
            title: 'Todos os Animais',
            background: 'allanimals'
        },
        list
    })
}

export const dogs = ( req: Request, res: Response) => {
    const list = pet.getFromType('dog')

    res.render('pages/page.mustache', {
        menu: createMenu('dogs'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog'
           
        },
        list
    })
}

export const cats = ( req: Request, res: Response) => {
    const list = pet.getFromType('cat')

    res.render('pages/page.mustache', {
        menu: createMenu('cats'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat',
        },
        list
    })
}

export const fishes = ( req: Request, res: Response) => {
    const list = pet.getFromType('fish')
    res.render('pages/page.mustache', {
        menu: createMenu('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish'
        },
        list
    })
}



