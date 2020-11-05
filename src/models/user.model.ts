import {CreateOptions, DataTypes, InstanceUpdateOptions} from 'sequelize'
import BaseModel from './base.model';
import {HookReturn} from "sequelize/types/lib/hooks";
import {Hash} from "../libs/hash";
import eMessages from "../utils/statics/eMessages";

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
            // Other model options go here
            sequelize, // We need to pass the connection instance
            hooks: {
                beforeCreate(user: User, options: CreateOptions): HookReturn {
                    return new Hash().hashPasword(user._attributes.password).then(pass => {
                        user._attributes.password = pass
                    })
                },
                beforeUpdate(user, options: InstanceUpdateOptions): HookReturn {
                }
            }
        });
    }

    static findByUsername(userName: string): Promise<any> {
        return User.findOne({
            where: {
                userName
            },
            raw: true
        })
    }


}




