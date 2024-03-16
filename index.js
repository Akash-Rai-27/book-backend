import express from 'express';
// import { PORT} from './config.js';

import { connectDB } from './db.js';
import mongoose from 'mongoose';

import booksRoute from './routes/booksRoute.js'

import cors from 'cors'
const app = express();

// Middleware for handling CORS policy
// option 1 : allow all origins wirh default of cors(*)

app.use(cors());

//option 2: allow custom origins 
// app.use(
//     cors({
//         origin:'',
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders:['Content-Type']
//     })
// )


// middleware for parsing request body
app.use(express.json())

connectDB()

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to our book store</h1>')
});

app.use('/books',booksRoute)



app.listen(process.env.PORT,()=>{
    console.log(`Server running on port : ${process.env.PORT}`)
})