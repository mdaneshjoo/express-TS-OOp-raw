import { Dialect } from 'sequelize'
import * as dotenv from 'dotenv';
import * as path from 'path'
import ENVerror from './errors/envError'

dotenv.config({
    path: path.join(process.cwd(), '.env'),
})


const dbDriver: Dialect = 'postgres'
const requiredEnv = (name) => {
    if (!process.env[name]) {
        throw new ENVerror('You must set the ' + name + ' environment variable')
    }
    return process.env[name]
}


const config = {
    env: process.env.NODE_ENV || 'development',
    dbconfig: {
        database: requiredEnv('DB_NAME'),
        username: requiredEnv("DB_USERNAME"),
        password: requiredEnv('DB_PASSWORD'),
        host: requiredEnv('DB_HOST'),
        driver: dbDriver,
        meta:{
            logging:false,
        },
        sync:{force:true} // force true  drop table and make it again
    },
    port: process.env.PORT || 10000,
    host: process.env.HOST || '0.0.0.0'
}


export default { ...config }