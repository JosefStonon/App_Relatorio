import Fastify from 'fastify';
import { routesCompany } from './routes/company';
import { routesMachine } from './routes/machine';

const app = Fastify();

app.register(routesMachine, { prefix: '/machines' });

app.register(routesCompany, { prefix: '/companies' });

app.setErrorHandler((error, request, reply) => {
  console.log(error);
  reply.code(500).send({ error: 'internal error!' });
});

app.listen({ port: 3001 }).then(() => console.log('Server is runing!'));
