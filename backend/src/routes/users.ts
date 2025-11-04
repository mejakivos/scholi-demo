import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

export default function(prisma: PrismaClient) {
  const router = Router();

  router.get('/', async (_req, res) => {
    const users = await prisma.user.findMany({ select: { id:true, email:true, name:true, role:true } });
    res.json(users);
  });

  router.post('/', async (req, res) => {
    const { email, password, name, role } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'email and password required' });
    const hashed = await bcrypt.hash(password, 10);
    const u = await prisma.user.create({ data: { email, password: hashed, name, role } });
    res.json({ id: u.id, email: u.email, name: u.name, role: u.role });
  });

  router.get('/:id', async (req, res) => {
    const u = await prisma.user.findUnique({ where: { id: req.params.id }, select: { id:true, email:true, name:true, role:true } });
    if (!u) return res.status(404).json({ error: 'Not found' });
    res.json(u);
  });

  return router;
}
