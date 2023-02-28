import expressLoader from "./express.loader"
import schemaLoader from "./schema.loader"
import sequelizeLoader from "./sequelize.loader"

export default {
    init: async ({ expressApp = null, sequelizeInstance = null, appRoutes = null }) =>{

        const verify = await schemaLoader(sequelizeInstance)

        if (verify) {
            await sequelizeLoader(sequelizeInstance)
        }

        await expressLoader(expressApp, appRoutes)
    }
}