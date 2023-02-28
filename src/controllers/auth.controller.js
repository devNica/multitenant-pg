import { authService } from "../auth"

const authController = {}

authController.CreateTenant = [
    async (req, res, next)=>{
        try {
            const { msg } = await authService.registerTenant({ ...req.body })
            res.status(200).json({ msg })
            
        } catch (error) {
            res.status(400).json({ msg: error.message })
        }
    }
]


export default authController