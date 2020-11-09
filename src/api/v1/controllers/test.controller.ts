import {Request, Response, Router} from 'express'
import IController from '../../../interfaces/controller.interface'
import User from "../../../models/user.model";
import {sendError, success} from "../../../utils/helpers/response";
import ServerError from "../../../errors/serverError";
import {IAuthBody} from "../../../interfaces/authBody.interface";
import authBody from "../../../middlewares/authBody.middleware";
import eMessages from "../../../utils/statics/eMessages";
import JWT from "../../../libs/JWT";
/**
 * @classdesc for login and signup
 * */
export default class test implements IController {
    router = Router()

    constructor() {
        this.init()
    }

    init(): void {
        this.router.post('/test', this.test)
    }

    /**
     * @api {post} /auth/login Request For Login
     * @apiName Login
     * @apiGroup AuthMiddleware
     *
     * @apiParam {String} userName Required
     * @apiParam {String} password Required
     * @apiParam {String} email
     * @apiParam {String} phoneNumber
     * @apiParamExample {json} login params
     *                  {
     *                      "userName":"foo",
     *                      "password":"bar"
     *                  }
     * @apiSuccess (200) {object} user User detail.
     * @apiSuccess (200) {String} token JWT Bearer Token.
     * @apiSuccessExample {json} Success-Response:
     *                      {
     *                          user:{
     *                              id:1,
     *                          },
     *                          token : <bearer-token>
     *                      }
     */
    private test(req: Request, res: Response) {
        res.send('ok')

    }


}
