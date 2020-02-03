import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';
import * as cookieParser from 'cookie-parser';

import {requestLoggerMiddleware} from './middleware/request_logger_middleware';
import {requestAuthenticationMiddleware} from './middleware/request_authentication';
import {todoRouter} from "./routes/todo.controller";
import {mainRouter} from "./routes/main.controller";
import {userRouter} from "./routes/user.controller";

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(cookieParser());

// TODO - add more middle ware
app.use(requestLoggerMiddleware);
app.use(requestAuthenticationMiddleware);
app.use(todoRouter);
app.use(mainRouter);
app.use(userRouter);

export default app;