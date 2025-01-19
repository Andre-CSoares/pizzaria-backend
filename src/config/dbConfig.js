import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

async function dbConnection() {
  const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  };

  try {
    const connection = await mysql.createConnection(config);
    console.log("Conectado ao banco de dados!");
    return connection;
  } catch (err) {
    console.error("Erro ao conectar ao banco de dados:", err.message);
    throw err;
  }
}

export default dbConnection;