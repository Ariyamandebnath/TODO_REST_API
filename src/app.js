import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'


const app = express()

//middleware for cors to allow cross origin resource sharing

app.use(cors());

//middleware to convert our request data to JSON format

app.use(bodyParser.json());


//importing routes

import {router} from "./routes/todo.routes.js"

//declaring routes

app.use("./api", router)



export {app}