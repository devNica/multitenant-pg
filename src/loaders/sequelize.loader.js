import {
  UserAccountModel,
  TenantModel,
  TenantUserModel
} from '../models'

export default async function sequelizeLoader(sequelizeInstance) {
  if (!sequelizeInstance) throw new Error('Error, sequelize instance is null or undefined')

  // ASSOCIATIONS

  // TENANT MODEL
  TenantModel.hasMany(TenantUserModel, { foreignKey: 'fk_tenant', onDelete: 'RESTRICT' })

  // TENANT USER MODEL
  TenantUserModel.belongsTo(UserAccountModel, { foreignKey: 'fk_user' })
  TenantUserModel.belongsTo(TenantModel, { foreignKey: 'fk_tenant' })

  // USER ACCOUNT MODEL
  UserAccountModel.hasMany(TenantUserModel, { foreignKey: 'fk_user', onDelete: 'RESTRICT' })

  await sequelizeInstance.sync({ alter: false })
    .then(async () => {
      console.log('Connection to db has been succesful')
    })
    .catch(err => console.error(err))
}