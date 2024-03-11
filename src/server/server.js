import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(morgan());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routes
import contactRouter from './routes/contact.js'
app.use('/contact', contactRouter);




export default app;
