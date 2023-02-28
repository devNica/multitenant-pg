import signupRepo from "./signup.repo"
import tenantRepo from "./tenant.repo"

const authService = {}


authService.registerTenant = async function (data){

    //verificar que el usuario a crear no este registrado
    signupRepo.verifyAlreadyExist(data.email)

    // intentar generar esquema y verificar que se creo correctamente
    const verify = await tenantRepo.generateSchema(data.schemaName)
    if(!verify) throw new Error("Schema could not be generated")

    // registrar cuenta de usuario inquilino
    const { userId } = await signupRepo.createUserAccount(data)
    // registar huella del schema del inquilino
    const { tenantId } = await tenantRepo.registerTenant(data.schemaName)
    // vincular usuario al esquema creado
    await tenantRepo.bindSchemaToUser(userId, tenantId)

    return {msg: 'Tenant has been registered successfull'}
}


export default authService