import 'dotenv/config';

import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes';
import helmet from 'helmet';
import Youch from 'youch';

class App {

  public server: express.Application;

  constructor() {
    this.server = express();
    this.server.disable("x-powered-by")

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json({ limit: '5mb' }));
    this.server.use(helmet({ contentSecurityPolicy: false }));
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }
      return res.status(500).json({
        error: 'Internal Server Error, the administrador was notified!',
      });
    });
  }
}
export default new App().server;