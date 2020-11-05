import ServerError from "../../errors/serverError";
import eMessages from "../statics/eMessages";
import validator from "validator";

export default class Validator {
    public existIn(items: any[], body: object) {
        items.map(item => {
            if (!body || !body.hasOwnProperty(item)) throw new ServerError(400, eMessages.required(item))
        })

    }

    public isPhoneNumber(phoneNumber: string) {
        if (phoneNumber && !validator.isMobilePhone(phoneNumber)) throw new ServerError(400, eMessages.phoneBadInput)
    }

    public isEmail(email: string) {
        if (email && !validator.isEmail(email)) throw new ServerError(400, eMessages.emailBadInput)
    }
}

