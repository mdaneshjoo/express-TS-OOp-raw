import { Response } from "express";

interface Router {
    path: string,
    router: any
}

export default Router