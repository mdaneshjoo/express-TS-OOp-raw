import { Router } from 'express'
import ControllerRoute from 'interfaces/controllerRoute.inteface'

export default class InitialRoute {
    router = Router()
    constructor(private routerConfig: { route: ControllerRoute[] }) {
        this.init(routerConfig.route)
    }
    init(routes: ControllerRoute[]) {
        routes.forEach(route => {
            this.router.use(route.path, route.controller.router)
        })
    }

}

