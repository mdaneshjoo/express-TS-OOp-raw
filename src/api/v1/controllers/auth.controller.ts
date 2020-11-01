import { Request, Response, Router } from 'express'
import Contoller from '../../../interfaces/controller.interface'
export default class Auth implements Contoller {
    router = Router()

    constructor() {
        this.init()
    }

    init():void {
        this.router.get('/login',this.login)
    }

    private login(req: Request, res: Response) {
        res.send('ok')
    }
    

}