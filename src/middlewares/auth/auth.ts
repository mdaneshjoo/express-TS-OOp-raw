import * as passport from "passport";
import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt'
import User from "../../models/user.model";

export class Auth {
    jwt() {
        let opts = {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secret'
        };
        passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
            User.findOne({
                where: {
                    id: jwt_payload.sub
                }
            }).then(user => {
                if (user) return done(null, user)
                return done('user not found', false)
            }).catch(e => {
                return done(e, false)
            })

        }));
    }
}