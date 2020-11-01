import ServerError from "../errors/serverError"
import { Request, Response } from 'express'
export const notFoundPage = (req: Request, res: Response, next) => {
    next(new ServerError(404, 'destnation not found'))
 }

export const errorHandler = async (error, req, res, next) => {
    return res.status(error.code || 500).json({ status: 'error', code: error.code || 500, message: error.message })
}
