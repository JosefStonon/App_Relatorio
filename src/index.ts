import Fastify from 'fastify';
import { routes } from './routes';

const app = Fastify();

app.register(routes, { prefix: '/admin' });

app.setErrorHandler((error, request, reply) => {
  console.log(error);
  reply.code(500).send({ error: 'internal error!' });
});

app.listen({ port: 3001 }).then(() => console.log('Server is runing!'));
