import { Router, Response, Request } from "express";


const app = Router();

app.get('/', (req: Request, res: Response )=> {
    res.send('aldla')
})


export default Router;