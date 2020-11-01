import App from './app'
import * as bodyPaser from 'body-parser'
import { Request, Response } from 'express'
const chalk = require('chalk')
import config from './config'
import apiRoutes from './api/routes'


const logger = (req: Request, res: Response, next) => {
    const method = {
        DELETE: 'bgRed',
        UPDATE: 'bgYellow',
        GET: 'bgGreen'
    }
    console.log(chalk[method[req.method]](req.method), chalk.bold.blue(req.path));
    next();
}


const app = new App({
    port: config.port,
    middlewares: [
        bodyPaser.json(),
        logger
    ],
    router: [
        { path: '/api', router: apiRoutes }
    ]
}, config.dbconfig)
app.listen()

