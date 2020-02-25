import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';
import * as cookieParser from 'cookie-parser';

import {requestLoggerMiddleware} from './middleware/request_logger_middleware';
import apiRouter from "./routes";

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(cookieParser());

// TODO - add more middle ware
app.use(requestLoggerMiddleware);
app.use(apiRouter);

export default app;