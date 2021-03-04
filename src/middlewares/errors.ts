import { Request, Response, NextFunction } from 'express';
import { error } from '../network/response';
import HttpException from '../utils/http-exception';

function errors(err: HttpException , req: Request, res: Response, _next: NextFunction) {
    console.error('[error]', err);

    const message = err.message || 'Error interno';
    const status = err.statusCode || 500;

    error(req, res, message, status);
}

export default errors;

