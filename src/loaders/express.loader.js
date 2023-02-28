import morgan from 'morgan'
import { json, urlencoded } from 'express'
import cors from 'cors'
import helmet from 'helmet'

export default async function expressLoader(app, routes) {
    if(!app || !Array.isArray(routes)) throw new Error('Errors in arguments')

    //middlewares
    app.use(morgan('dev'))
    app.use(json())
    app.use(urlencoded({ extended: false }))
    app.use(cors({ origin: "*"}))
    app.use(helmet())

    routes.forEach(r=>{
        app.use(r.path, r.controller)
    })

}