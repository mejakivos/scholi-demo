import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

export default function(prisma: PrismaClient) {
  const router = Router();

  router.get('/', async (_req, res) => {
    const children = await prisma.child.findMany();
    res.json(children);
  });

  router.post('/', async (req, res) => {
    const { firstName, lastName } = req.body;
    if (!firstName) return res.status(400).json({ error: 'firstName required' });
    const c = await prisma.child.create({ data: { firstName, lastName } });
    res.json(c);
  });

  router.get('/:id', async (req, res) => {
    const c = await prisma.child.findUnique({ where: { id: req.params.id } });
    if (!c) return res.status(404).json({ error: 'Not found' });
    res.json(c);
  });

  return router;
}
