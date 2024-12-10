import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Rota para cadastrar um novo usuário
router.post('/', async (req, res) => {
  const { name, age, email } = req.body;

  try {
    
    const ageAsString = String(age);  

    
    const newUser = await prisma.user.create({
      data: {
        name,
        age: ageAsString, 
        email,
      },
    });

    res.status(201).json({
      message: 'Usuário cadastrado com sucesso!',
      user: newUser,
    });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ message: 'Erro ao cadastrar o usuário' });
  }
});

export default router;
