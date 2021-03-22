import 'reflect-metadata';
import 'express-async-errors';

import express from 'express';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

export default app;
