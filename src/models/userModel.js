import dbConnection from "../config/dbConfig.js";
import bcrypt from "bcrypt";

export const userModel = {
    async createTable(){
        const query = `CREATE TABLE IF NOT EXISTS users (
                id INT PRIMARY KEY AUTO_INCREMENT,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`;
        try {
            await dbConnection.query(query);
            console.log("Users table created or already exists");
        } catch (error) {
            console.error('Error creating users table:', error);
            throw error;
        }
    },

    async findByEmail(email){
        const [rows] = await dbConnection.query( 'SELECT * FROM users WHERE email = ?', [email]);

        return rows[0];
    },

    async create(email, password) {
        const hashedPassword = await bcrypt.hash(password, 12);
        const [result] = await pool.query(
            'INSERT INTO users (email, password) VALUES (?, ?)',
            [email, hashedPassword]
        );
        return result.insertId;
    }
}