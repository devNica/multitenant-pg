import { Router } from 'express'


const testRouter = Router()


testRouter.get('/', (req, res)=>{
    res.status(200).json({ msg: " Welcome to tenant app"})
})


export default testRouter