import Auth from './controllers/auth.controller'
import InitialRoute from './initial.route'
const router = new InitialRoute({
    route: [
        { path: '/auth', controller: new Auth(), middleware:[]}
    ]
}).router


export default router


