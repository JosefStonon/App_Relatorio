import { FastifyPluginAsync, FastifyRequest } from 'fastify';
import { prismaClient } from '../lib';
import { Pessoa } from '../types/types';

export const routes: FastifyPluginAsync = async (fastify) => {
  fastify.post(
    '/users',
    async (request: FastifyRequest<{ Body: Pessoa }>, reply) => {
      const { sexo, idade, name, email } = request.body;

      if (sexo !== 'male' && sexo !== 'female') {
        return reply.code(400).send({ message: 'Invalid gender value' });
      }

      const pessoa = await prismaClient.pessoa.create({
        data: {
          name,
          email,
          sexo,
          idade,
        },
        select: {
          id: true,
          name: true,
          sexo: true,
        },
      });

      reply.code(201).send(pessoa);
    },
  );

  fastify.get('/users', async (request: FastifyRequest, reply) => {
    const users = await prismaClient.pessoa.findMany({
      distinct: ['email'],
    });

    reply.send({ users });
  });

  fastify.put(
    '/users/:id',
    async (
      request: FastifyRequest<{ Body: Pessoa; Params: FastifyRequest }>,
      reply,
    ) => {
      const { id } = request.params;
      const { email, idade, name, sexo } = request.body;

      const upDate = await prismaClient.pessoa.update({
        data: {
          email,
          idade,
          name,
          sexo,
        },
        where: {
          id,
        },
        select: {
          id: true,
        },
      });

      reply.send({ upDate });
    },
  );

  fastify.delete(
    '/users/:id',
    async (request: FastifyRequest<{ Params: FastifyRequest }>, reply) => {
      const { id } = request.params;

      const deleteUser = await prismaClient.pessoa.delete({
        where: { id },
        select: { id: true, email: true },
      });

      reply.send({ deleteUser });
    },
  );
};

// nem aqui
