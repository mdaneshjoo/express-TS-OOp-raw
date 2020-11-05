import {Model, DataTypes} from 'sequelize'

export default class BaseModel extends Model {
    static baseFields = {
        deletedAt:{
            type:DataTypes.DATE,
            allowNull:true
        }
    }
}