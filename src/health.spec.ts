import request from 'supertest';
import express from 'express';
import { router } from './routes';

describe('health', () => {
  it('GET /health', async () => {
    const app = express();
    app.use('/', router);
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
  });
});
