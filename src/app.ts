import * as express from 'express';
import { Application } from 'express';
const chalk = require('chalk');
import { Sequelize, Dialect } from 'sequelize';
import Router from './interfaces/router.interface'

export default class App {
    private app: Application;
    private port: number;
    constructor(private appConfig: { port; middlewares: any; router: Router[] },
        private dbconfig: { database: string; username: string; password: string; host: string, driver: Dialect }) {
        this.port = appConfig.port
        this.app = express()
        this.middlewares(appConfig.middlewares)
        this.configDB(dbconfig.database, dbconfig.username, dbconfig.password, dbconfig.host, dbconfig.driver)
        this.router(appConfig.router)
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private router(routes: Router[]) {
        routes.forEach((route) => {
            this.app.use(route.path, route.router)
        })

    }


    private async configDB(dbname: string, userName: string, password: string, host: string, dialect: Dialect) {
        const seq = new Sequelize(dbname, userName, password, {
            host,
            dialect
        });
        try {
            await seq.authenticate();
            console.log(chalk.green('Connection has been established successfully.'));
        } catch (error) {
            console.error(chalk.red('Unable to connect to the database:/n'), error);
        }
    }
    public listen() {
        this.app.listen(this.port, () => {
            console.log(chalk.bgGreen(`Server runs in http://${process.env.HOST}:${this.port} MODE ${process.env.ENV}`));
        })
    }

}

