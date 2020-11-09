import { Response} from 'express'
import eMessages from "../statics/eMessages";
import config from "../../config";

export const sendError = (res: Response) => (e?) => {
    if (config.env === 'development') console.log(e)
    res.status(e.code || 500).json({
        status: 'error',
        code: e.code || 500,
        message: e.message || eMessages.notFound
    })
}

export const success = (res: Response) => (entity:object) => {
    if (entity)
        return res.json({
            status: 'ok',
            code: 200,
            length:Object.keys(entity).length,
            data: entity
        })
    sendError(res)
}
