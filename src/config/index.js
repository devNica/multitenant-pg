import constantsConfig from "./constants.config";
import databaseSetup from './database.config'
import sequelizeInstance from "./sequelize.config";

export {
    constantsConfig as config,
    databaseSetup as dbSetup,
    sequelizeInstance,
}