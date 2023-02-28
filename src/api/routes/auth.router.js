import {Router} from 'express'
import authController from '../../controllers/auth.controller'

const authRouter = Router()

authRouter.post('/tenant', authController.CreateTenant)

export default authRouter