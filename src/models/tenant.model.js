import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../config'
const { DataTypes, Model, NOW } = Sequelize

export default class TenantModel extends Model {}

TenantModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  schema_name: {
    type: DataTypes.STRING,
    unique: true,
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
  modelName: 'tenant',
  schema: 'accounts'
})
