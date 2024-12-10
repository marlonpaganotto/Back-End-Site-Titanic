import express from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const router = express.Router();
const prisma = new PrismaClient();
const SECRET_KEY = process.env.SECRET_KEY;

// Middleware para verificar o token de autenticação
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido.' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido.' });
    }
    req.user = decoded;
    next();
  });
};


router.delete('/:email', verifyToken, async (req, res) => {
  const { email } = req.params;

  try {
    
    if (req.user.email !== email) {
      return res.status(403).json({ message: 'Você não tem permissão para deletar este usuário.' });
    }

    const deletedUser = await prisma.user.delete({ where: { email } });
    res.status(200).json({ message: 'Usuário deletado com sucesso!', deletedUser });
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    res.status(500).json({ message: 'Erro ao deletar usuário.' });
  }
});

export default router;
