import App from './app'
import * as bodyPaser from 'body-parser'
import config from './config'
import apiRoutes from './api/routes'
import { notFoundPage ,errorHandler} from './middlewares/404Error.middleware'
import * as morgan from 'morgan'

const app = new App({
    port: config.port,
    middlewares: [
        bodyPaser.json(),
        morgan('dev'),
        notFoundPage,
        errorHandler
    ],
    router: [
        { path: '/api', router: apiRoutes },
    ]
}, config.dbconfig)


app.listen()

