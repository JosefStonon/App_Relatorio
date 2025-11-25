import fatifyCors from '@fastify/cors';
import Fastify from 'fastify';
import { routesAvaliation } from './routes/avaliation';
import { routesCompany } from './routes/company';
import { routesMachine } from './routes/machine';
const app = Fastify();

app.register(routesMachine, { prefix: '/machines' });
app.register(routesCompany, { prefix: '/companies' });
app.register(routesAvaliation, { prefix: '/avaliation' });

app.register(fatifyCors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  //allowedHeaders: [
  //  'Origin',
  //  'X-Requested-With',
  //  'Content-Type',
  //  'Accept',
  //]
});

app.setErrorHandler((error, request, reply) => {
  console.log(error);
  reply.code(500).send({ error: 'internal error!' });
});

app.listen({ port: 3001 }).then(() => console.log('🔥 Server is runing!'));
