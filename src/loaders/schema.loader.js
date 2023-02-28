

export default async function schemaLoader(sequelizeInstance) {
    if (!sequelizeInstance) throw new Error('Sequelize instance is null or undefined')

    let schemaCreated = false

    await sequelizeInstance.showAllSchemas({ logging: false })
        .then(async data => {
            if (!data.includes('accounts')) {
                await sequelizeInstance.createSchema('accounts')
                schemaCreated = true
            }
        })
        .catch(err => console.error(err))

    return schemaCreated
}