import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../config'
const { DataTypes, UUIDV4, Model, NOW } = Sequelize

export default class UserAccountModel extends Model {}

UserAccountModel.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    unique: true,
    defaultValue: UUIDV4
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: NOW()
  }
}, {
  sequelize: db,
  modelName: 'user_account',
  schema: 'accounts'
})