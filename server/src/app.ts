import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';
import {requestLoggerMiddleware} from './request_logger_middleware';
import {todoRouter} from "./todo.controller";
import {mainRouter} from "./main.controller";

const app = express();
app.use(cors());
app.use(bodyparser.json());

// TODO - add more middle ware
app.use(requestLoggerMiddleware);
app.use(todoRouter);
app.use(mainRouter);

export default app;