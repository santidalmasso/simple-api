import { Router, Request, Response, NextFunction } from 'express'
import { success } from '../../network/response'
import controller from './index';


const router = Router()

// Routes
router.get('/', greet);


// Internal functions
function greet(req: Request, res: Response, next: NextFunction) {
  controller.greet()
      .then((greeting) => {
          success(req, res, greeting, 200);
      })
      .catch(next);
}

export default router