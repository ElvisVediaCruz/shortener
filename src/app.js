import dotenv from "dotenv";
dotenv.config({
    path: '../.env'
})

import express from 'express';
import urlRoute from './route/url.route.js';
import connectDB from './config/database.js';

import cors from 'cors';



const app = express();

connectDB();

app.set('trust proxy', 1); // Para que express-rate-limit funcione correctamente detrás de proxies como Heroku
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());
app.use('/url', urlRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});