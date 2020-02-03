import jwt from 'jsonwebtoken';
import config from '../config';
import {Request, Response, NextFunction} from 'express';

const requestAuthenticationMiddleware = (req:Request, res: Response, next:NextFunction) => {
    const token = req.cookies.token;
    if (!token) {
        res.status(401).send('Unauthorized: No token provided');
    } else {
        jwt.verify(token, config.pwdSecret, function(err, decoded) {
            if (err) {
                res.status(401).send('Unauthorized: Invalid token');
            } else {
                //req.email = decoded.email;
                next();
            }
        });
    }
};
export {requestAuthenticationMiddleware};