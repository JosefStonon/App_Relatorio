import 'fastify';

interface Pessoa {
  name: string;
  email: string;
  idade: number;
  sexo: 'male' | 'female';
}

interface Params {
  id: string;
}

declare module 'fastify' {
  interface FastifyRequest {
    Body: Pessoa;
    Params: {
      id: string;
    };
  }
}
