import express, { Application, Request, Response } from 'express'
import cors from 'cors';
import { json } from 'stream/consumers'
const app : Application = express()
const port = 3000


//parsers
app.use(express.json())
app.use(cors())





app.get('/', (req:Request, res:Response) => {
  const a = 10;
  res.send(a)
})

// console.log(process.cwd());
//G:\01Level-2\M2-Mongodb\first-project


export default app;