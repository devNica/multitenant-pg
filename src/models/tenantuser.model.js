import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../config'
const { DataTypes, Model } = Sequelize

export default class TenantUserModel extends Model {}

TenantUserModel.init({
  fk_tenant: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'tenant',
      key: 'id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  },
  fk_user: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'user_account',
      key: 'id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  }

}, {
  sequelize: db,
  modelName: 'tenant_user',
  schema: 'accounts'
})
