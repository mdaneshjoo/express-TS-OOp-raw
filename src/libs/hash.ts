import * as bcrypt from "bcrypt";

export class Hash{
    public hashPasword (password: string): Promise<string> {
        if (password)
            return bcrypt.hash(password, 9)
        return Promise.resolve(password)
    }
}