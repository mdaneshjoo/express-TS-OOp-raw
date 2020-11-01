import User from './user.model'
export default class ModelInit{
    constructor(seqeulize){
        this.initModels(seqeulize)
    }
    private initModels(seqeulize) {
        const models = {
            User:User.init(seqeulize)
        }
        for (const key in models) {
            const model = models[key];
            typeof model.associate === "function" && model.associate(models);
        }
    }
}