import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import registroRoutes from './routes/registro.js'; 
import loginRoutes from './routes/login.js';  
import userRoutes from './routes/useRoutes.js';    

dotenv.config(); 

const app = express();

app.use(cors());
app.use(express.json());


app.use('/registro', registroRoutes); 
app.use('/login', loginRoutes);   
app.use('/api/users', userRoutes);     

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
