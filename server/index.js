import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import todosRoutes from './routes/todos.js';
const app = express();
dotenv.config();
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use('/todos', todosRoutes)
const mongodb = 'mongodb+srv://user:123@listatareas.1gnx6.mongodb.net/listatareas?retryWrites=true&w=majority';

app.get('/', (req,res) =>{
    res.send('Bienvenido al servidor')
})

const PORT = process.env.PORT || 5000;

mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(PORT, () => console.log('Servidor corriendo en el puerto ' + PORT))).catch((error) => console.log(error));