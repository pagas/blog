import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import {User} from '../../models/user';
import config from '../../config';
import {requestAuthentication} from '../../middleware/request_authentication';

const mainRouter = express.Router();

mainRouter.get('/api/home', function (req, res) {
    res.send('Welcome, Dovile!');
});

mainRouter.get('/api/secret', requestAuthentication, function (req, res) {
    res.send('The password is potato');
});

mainRouter.post('/api/authenticate', function (req, res) {
    const {email, password} = req.body;
    User.findOne({email}, function (err, user) {
        if (err) {
            console.error(err);
            res.status(500)
                .json({
                    error: 'Internal error please try again'
                });
        } else if (!user) {
            res.status(401)
                .json({
                    error: 'Incorrect email or password'
                });
        } else {
            user.comparePassword(password).then((same: boolean) => {
                if (!same) {
                    res.status(401)
                        .json({
                            error: 'Incorrect email or password'
                        });
                } else {
                    // Issue token
                    const payload = {email};
                    const token = jwt.sign(payload, config.pwdSecret, {
                        expiresIn: '1h'
                    });
                    res.cookie('token', token, {httpOnly: true})
                        .sendStatus(200);
                }
            }).catch((err: Error) => {
                res.status(500)
                    .json({
                        error: 'Internal error please try again'
                    });
            });
        }
    });
});

mainRouter.get('/checkToken', requestAuthentication, function(req, res) {
    res.sendStatus(200);
});

export default mainRouter;