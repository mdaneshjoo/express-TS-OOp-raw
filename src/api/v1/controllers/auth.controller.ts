import {Request, Response, Router} from 'express'
import IController from '../../../interfaces/controller.interface'
import User from "../../../models/user.model";
import {sendError, success} from "../../../utils/helpers/response";
import ServerError from "../../../errors/serverError";
import {IAuthBody} from "../../../interfaces/authBody.interface";
import authBody from "../../../middlewares/authBody.middleware";

export default class Auth implements IController {
    router = Router()

    constructor() {
        this.init()
    }

    init(): void {
        this.router.post('/login',authBody, this.login)
        this.router.post('/signup',authBody, this.signup)
    }

    private login(req: Request, res: Response) {
        const body: IAuthBody = req.body
        throw new ServerError(404, 'hello')
        console.log(body)
        res.send('ok')
        // User.findByUsername(body.userName)
        //     .then(success(res))
        //     .catch(sendError)
    }

    private signup(req: Request, res: Response) {
        const body: IAuthBody = req.body
        User.findByUsername(body.userName)
            .then(success(res))
            .catch(e => {
                throw new ServerError(404, e)
            })
    }
}
