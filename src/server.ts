import App from './app'
import * as bodyParser from 'body-parser'
import config from './config'
import apiRoutes from './api/routes'
import {notFoundPage, errorHandler} from './middlewares/404Error.middleware'
import * as morgan from 'morgan'

const app = new App({
    port: config.port,
    middlewares: [
        bodyParser.json(),
        morgan('dev'),
    ],
    router: [
        {path: '/api', router: apiRoutes}
    ],
    funcMidd:[
        notFoundPage,
        errorHandler

    ]
}, config.dbconfig)


app.listen()

