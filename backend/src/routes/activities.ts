import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

export default function(prisma: PrismaClient) {
  const router = Router();

  router.get('/', async (req, res) => {
    const childId = req.query.childId as string | undefined;
    const where = childId ? { assignments: { some: { childId } } } : undefined;
    const acts = await prisma.activity.findMany({ where, include: { assignments: true } });
    res.json(acts);
  });

  router.get('/:id', async (req, res) => {
    const a = await prisma.activity.findUnique({ where: { id: req.params.id }, include: { assignments: true } });
    if (!a) return res.status(404).json({ error: 'Not found' });
    res.json(a);
  });

  router.post('/', async (req, res) => {
    const { title, description, type, source, startTs, endTs, assignedTo } = req.body;
    if (!title || !startTs || !endTs) return res.status(400).json({ error: 'title,startTs,endTs required' });
    const activity = await prisma.activity.create({ data: {
      title, description, type, source, startTs: new Date(startTs), endTs: new Date(endTs)
    }});
    if (assignedTo && Array.isArray(assignedTo) && assignedTo.length) {
      const assignments = assignedTo.map((childId:string) => ({ activityId: activity.id, childId }));
      await prisma.activityAssignment.createMany({ data: assignments });
    }
    const full = await prisma.activity.findUnique({ where: { id: activity.id }, include: { assignments: true } });
    res.json(full);
  });

  router.put('/:id', async (req, res) => {
    const { title, description, startTs, endTs, assignedTo } = req.body;
    await prisma.activity.update({ where: { id: req.params.id }, data: { title, description, startTs: startTs ? new Date(startTs) : undefined, endTs: endTs ? new Date(endTs) : undefined } });
    if (assignedTo) {
      await prisma.activityAssignment.deleteMany({ where: { activityId: req.params.id } });
      const assignments = assignedTo.map((childId:string) => ({ activityId: req.params.id, childId }));
      if (assignments.length) await prisma.activityAssignment.createMany({ data: assignments });
    }
    const updated = await prisma.activity.findUnique({ where: { id: req.params.id }, include: { assignments: true } });
    res.json(updated);
  });

  router.delete('/:id', async (req, res) => {
    await prisma.activityAssignment.deleteMany({ where: { activityId: req.params.id } });
    await prisma.activity.delete({ where: { id: req.params.id } });
    res.json({ id: req.params.id });
  });

  return router;
}
