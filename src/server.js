import express from "express";
import loader from "./loaders/loader";
import api from "./api";

import { config, sequelizeInstance } from './config'

function startServer () {
    const app = express()

    loader.init({ 
        expressApp: app,
        sequelizeInstance, 
        appRoutes: api()
    })

    app.listen(config.SERVER_PORT, ()=>console.log(`server is running on port: ${config.SERVER_PORT}`))
}


startServer()