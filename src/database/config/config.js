import dotenv from 'dotenv';

dotenv.config();

const config ={
    "development": {
        "username":process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database":process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "mysql"
      },
      "test": {
        "username":process.env.DB_USER_TEST,
        "password": process.env.DB_PASSWORD_TEST,
        "database":process.env.DB_NAME_TEST,
        "host": process.env.DB_HOST_TEST,
        "dialect": "mysql"
      },
      "production": {
        "username":process.env.DB_USER_PROD,
        "password": process.env.DB_PASSWORD_PROD,
        "database":process.env.DB_NAME_PROD,
        "host": process.env.DB_HOST_PROD,
        "dialect": "mysql"
      }
}

module.exports=config;