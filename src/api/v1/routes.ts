import Auth from './controllers/auth.controller'
import InitialRoute from './initial.route'
import authBody from "../../middlewares/authBody.middleware";
import test from "./controllers/test.controller";
import passport from "../../libs/passport";


const router = new InitialRoute({
    route: [
        {path: '/auth', controller: new Auth(), middleware: [authBody]},
        {path: '/user', controller: new test(), middleware: [passport.token]},

    ]
}).router


export default router


