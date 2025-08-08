import { Request, Response } from 'express';

export const healthController = (_req: Request, res: Response) => {
  res.json({ ok: true, service: 'backend', ts: new Date().toISOString() });
};
