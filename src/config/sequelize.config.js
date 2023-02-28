import Sequelize from 'sequelize'
import { dbSetup } from '.'

const sequelizeInstance = new Sequelize(
  dbSetup.database,
  dbSetup.user,
  dbSetup.password,
  dbSetup.options
)

export default sequelizeInstance