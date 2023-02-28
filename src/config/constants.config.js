import 'dotenv/config'

export default {
    SERVER_PORT: process.env.SERVER_PORT || 6500,
    DB: {
        POSTGRES_USER: process.env.POSTGRES_USER,
        POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
        POSTGRES_DB: process.env.POSTGRES_DB,
        POSTGRES_HOST: process.env.POSTGRES_HOST,
        DIALECT: process.env.DIALECT
    }
}

