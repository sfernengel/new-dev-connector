import { Router } from 'express';

import { logger } from '../utils/logger.utils';
import { messageHandler } from '../controllers/email-verification.controller';

const eventRouter: Router = Router();

eventRouter.post('/', async (req, res, next) => {
  logger.info('Event message received');
  try {
    await messageHandler(req, res);
  } catch (error) {
    next(error);
  }
});

export default eventRouter;
