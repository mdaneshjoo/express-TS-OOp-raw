import {Request, Response, Router} from 'express'
import eMessages from "../statics/eMessages";
import ServerError from "../../errors/serverError";

export const sendError = (entity?: string, code?: number) => {
    if (entity) {
        throw new ServerError(code || 404, entity)
    }
    throw new ServerError(404, eMessages.notFound)
}

export const success = (res: Response) => (entity) => {
    if (entity)
        res.send(entity)
    sendError()
}
