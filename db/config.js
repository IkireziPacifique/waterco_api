import dotenv from "dotenv";

dotenv.config();

const dbconfig = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASS,
    DB: process.env.DB_NAME,
    dialect: "mysql",
    pool:{
        max: 5,
        min: 0,
        acquire: 300000,
        idle: 10000
    }
}

export default dbconfig; 