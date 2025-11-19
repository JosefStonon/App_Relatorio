import 'fastify';

interface Company {
  id: string;
  name: string;
  tradeName: string;
  cnpj: string;
  address: string;
}

interface Params {
  id: string;
}

declare module 'fastify' {
  interface FastifyRequest {
    Body: Company;
    Params: {
      id: string;
    };
  }
}
