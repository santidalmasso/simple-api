import { success } from './../../network/response';
import { Router, Request, Response, NextFunction } from 'express'
import controller from './index'


const router = Router()

// Routes
router.get('/', list);
router.post('/', upsert);


// Internal functions
function list(req: Request, res: Response, next: NextFunction) {

  controller.list()
    .then((list) => {
      success(req, res, list, 200);
    })
    .catch(next);

}

function upsert(req: Request, res: Response, next: NextFunction) {

  controller.upsert(req)
    .then((note) => {
      success(req, res, note, 200);
    })
    .catch(next);

}

export default router