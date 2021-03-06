import {CreateOptions, DataTypes, InstanceUpdateOptions, Op} from 'sequelize'
import BaseModel from './base.model';
import {HookReturn} from "sequelize/types/lib/hooks";
import {Hash} from "../libs/hash";


export default class User extends BaseModel {
    static init(sequelize) {
        return super.init({
            userName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true
            },
            phoneNumber: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true
            },
            googleId: {
                type: DataTypes.INTEGER,
                allowNull: true,
                unique: true
            },
            isPrivate: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            ...super.baseFields,

        }, {
            sequelize,
            hooks: {
                beforeCreate(user: User, options) {
                    const password = user.get('password').toString()
                    return new Hash().hashPasword(password).then(hasedPass => {
                        user.set('password', hasedPass)
                    })
                },
                beforeUpdate(user, options: InstanceUpdateOptions): HookReturn {
                    const password = user.get('password').toString()
                    return new Hash().hashPasword(password).then(hasedPass => {
                        user.set('password', hasedPass)
                    })
                }
            }
        });
    }
    id = this.get('id')
    static findByUsername(userName: string,): Promise<any> {
        return User.findOne({
            where: {
                userName
            },
        })
    }

    static _findOrCreate(userName: string, body: object): Promise<any> {
        return User.findOrCreate({
            where: {
                userName
            }
            , defaults: {...body}
        })
    }

    display() {
        let user = {}
        const neededFileds = ['id', 'userName', 'email', 'phoneNumber', 'isPrivate']
        neededFileds.map(field => {
            user[field] = this.get(field)
        })
        return user
    }


}
