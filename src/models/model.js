import dbConnection from "../config/dbConfig.js";

const conexao = await dbConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"  
});