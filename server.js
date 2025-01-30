import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { register, login } from './src/controllers/authController.js';
import { authenticateToken } from './src/middleware/auth.js';
import { UserModel } from './src/models/userModel.js';
import dotenv from "dotenv";
//import routes from "./src/routes/routes.js";
dotenv.config();

const app = express();
//routes(app);

app.use(helmet());
app.use(express.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
})
app.use('/api', limiter);

app.post('/api/register', register);
app.post('/api/login', login);

app.get('/api/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Protected route', userId: req.user.userId });
});

const startServer = async () => {
    try {
        await UserModel.createTable();
        
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();