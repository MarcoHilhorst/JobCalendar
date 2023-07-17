import express from "express"
import cors from "cors"
import mongoose, { Mongoose } from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

import {homeRouter} from './routes/home.js'
import {joblistRouter} from './routes/joblistRoutes.js'
import { calRouter } from "./routes/calRoutes.js"



const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_CONNECTION_STRING, {useUnifiedTopology: true})  

app.use('/', homeRouter)
app.use('/joblist', joblistRouter)
app.use('/cal', calRouter)


app.listen(3001, () =>{
    console.log("server started on 3001")
})