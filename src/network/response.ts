import { Request, Response } from "express";

export const success = (_req: Request, res: Response, message: string = '', status: number = 200) => {
  
  res.status(status).send({
      error: false,
      status: status,
      body: message,
  });
}

export const error = (_req: Request, res: Response, message: string = 'Internal server error', status: number = 500) => {

    res.status(status).send({
        error: false,
        status: status,
        body: message,
    });
  }

