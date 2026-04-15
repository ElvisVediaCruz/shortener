import express from 'express';
import UrlController from '../controller/url.controller.js';
import { checkUrl, checkUrlCreate, checkUrlValid } from '../middleware/valid.js';
import rateLimit from "express-rate-limit";

const route = express.Router();

const urlController = new UrlController();

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 1,
    message: {
        error: "Demasiadas solicitudes. Intenta más tarde."
    }
})

route.post('/',
    limiter,
    checkUrlCreate,
    checkUrlValid,
    urlController.createUrl
);
route.get('/:url',
    checkUrl,
    urlController.getUrl
);

export default route;
