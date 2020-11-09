import Schemas from "./Schemas";
import * as Joi from 'joi'
import ServerError from "../../errors/serverError";

export default class JoiValidator {
    Joi = Joi
    private schema

    constructor() {
        this.schema = new Schemas()
    }

    public authValidate(body: object) {
        const {value, error} = Joi.object(this.schema.authSchema).validate(body)
        if (error) throw new ServerError(error)
        return value
    }


}