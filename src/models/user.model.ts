import {  DataTypes } from 'sequelize'
import BaseModel from './base.model';

export default class User extends BaseModel {
    static init(sequelize) {
        return super.init({
            // Model attributes are defined here
            firstName: {
              type: DataTypes.STRING,
              allowNull: false
            },
            lastName: {
              type: DataTypes.STRING
              // allowNull defaults to true
            },
            last_Name: {
                type: DataTypes.STRING
                // allowNull defaults to true
              }
          }, {
            // Other model options go here
            sequelize, // We need to pass the connection instance
          });
    }
}




