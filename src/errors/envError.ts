export default class ENVerror extends Error{
    constructor(message){
        super(message)
        this.name='ENV Error'
    }
}
