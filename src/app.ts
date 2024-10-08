import express, { Application, Request, Response } from "express";
import cors from "cors";

import globalErrorHandler from "./app/modules/middlewares/globalErrorhandlers";
import notFound from "./app/modules/middlewares/notFound";
import router from "./app/routes";
// import { json } from 'stream/consumers'

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

// const test = async (req: Request, res: Response) => {
const test = (req: Request, res: Response) => {
  // Promise.reject()
  const a = 200;
  res.sendStatus(a);
};

app.get('/', test);

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
