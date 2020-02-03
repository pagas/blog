"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requestLoggerMiddleware = function (req, resp, next) {
    console.info(req.method + " " + req.originalUrl);
    var start = new Date().getTime();
    resp.on('finish', function () {
        var elapsed = new Date().getTime() - start;
        console.info(req.method + " " + req.originalUrl + " " + resp.statusCode + " " + elapsed + "ms");
    });
    next();
};
exports.requestLoggerMiddleware = requestLoggerMiddleware;
