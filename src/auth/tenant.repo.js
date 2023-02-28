import { sequelizeInstance } from "../config"
import { TenantModel, TenantUserModel } from '../models'

const tenantRepo = {}


tenantRepo.generateSchema = async schemaName => {
    let schemaCreated = false

    await sequelizeInstance.showAllSchemas({ logging: false })
        .then(async data => {
            if (!data.includes(schemaName)) {
                await sequelizeInstance.createSchema(schemaName)
                schemaCreated = true
            }
        })
        .catch(err => console.error(err))

    return schemaCreated
}

tenantRepo.registerTenant = async schemaName => {
    const tenant = await TenantModel.create({ schema_name: schemaName })
    return { tenantId: tenant.id }
}


tenantRepo.bindSchemaToUser = async (userId, tenantId) => {
    await TenantUserModel.create({
        fk_tenant: tenantId,
        fk_user: userId
    })
}

export default tenantRepo