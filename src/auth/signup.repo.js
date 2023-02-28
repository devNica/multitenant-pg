import argon from 'argon2'
import { UserAccountModel } from '../models'


const signupRepo = {}

signupRepo.verifyAlreadyExist = async email => {
    const user = await UserAccountModel.findOne({ where: { email }})
    if(user) throw new Error ("User account already exist")
}


signupRepo.createUserAccount = async data => {
    const userDTO = {
        fullname: data.fullname,
        email: data.email,
        password: await argon.hash(data.password)
     }

    const user = await UserAccountModel.create(userDTO)

    return { userId: user.id }
}


export default signupRepo