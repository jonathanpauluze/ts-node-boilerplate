import { Router } from 'express';

const appointmentsRouter = Router();

appointmentsRouter.post('/', (request, response) => {
  response.json({ route: 'appointments '});
});

export default appointmentsRouter;