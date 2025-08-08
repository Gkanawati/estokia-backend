import { Router } from 'express';
import { healthController } from './controllers/health';

export const router = Router();

router.get('/health', healthController);
