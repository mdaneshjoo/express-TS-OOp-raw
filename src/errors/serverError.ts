import IErrMessage from "../interfaces/errorMessages.interface";

export default class ServerError extends Error{
    code
    constructor(message:IErrMessage){
        super(message.message)
        this.code=message.code||500
    }
}

