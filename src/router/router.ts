
import { Router, Request, Response } from 'express';


const router = Router();


router.get('/marcas', (req: Request, res: Response) => {

    res.json({
        ok: true,
        mensaje: 'Todo ok'
    });


});


router.get('/marcas/:id', (req: Request, res: Response) => {

    const id = req.params.id;

    res.json({
        ok: true,
        mensaje: 'Todo ok con ID',
        id
    });


});


export default router;