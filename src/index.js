import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import authRoutes from './routes/authroutes.js';
const app = express();
app.use(express.json());
app.use('/auth',authRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});