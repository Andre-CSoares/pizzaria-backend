import dbConnection from "../../dbConfig.js";

async function createDatabase() {
  try {
    const connection = await dbConnection();
    await connection.query("CREATE DATABASE mydb");
    console.log("Database created");
    await connection.end();
  } catch (err) {
    console.error("Error creating database:", err.message);
  }
}

createDatabase();