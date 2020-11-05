import {Response, Request} from 'express'
import {IAuthBody} from "../interfaces/authBody.interface";
import Validator from "../utils/helpers/validator";


const authBody = (req: Request, res: Response, next) => {
    // const body: IAuthBody = req.body
    // const V = new Validator()
    // const requiredFields = {
    //     login: ['userName', 'password'],
    //     signup: ['userName', 'password']
    // }
    // console.log(req.body)
    // V.existIn(requiredFields['login'], body)
    // if (body.hasOwnProperty('email')) V.isEmail(body.email)
    // if (body.hasOwnProperty('phoneNumber')) V.isPhoneNumber(body.phoneNumber)
    next()
}

export default authBody