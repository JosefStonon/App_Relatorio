import { Company } from '@prisma/client';
import { FastifyPluginAsync, FastifyRequest } from 'fastify';
import { prismaClient } from '../lib';

export const routes: FastifyPluginAsync = async (fastify) => {
  fastify.post(
    '/cias',
    async (request: FastifyRequest<{ Body: Company }>, reply) => {
      const { address, cnpj, name, tradeName } = request.body;

      const companies = await prismaClient.company.create({
        data: {
          name,
          cnpj,
          address,
          tradeName,
        },
      });

      reply.code(201).send(companies);
    },
  );

  fastify.get('/cias', async (request: FastifyRequest, reply) => {
    const companies = await prismaClient.company.findMany({
      distinct: ['name'],
      select: {
        machines: true,
        id: true,
        name: true,
        tradeName: true,
        cnpj: true,
        address: true,
      },
    });

    reply.send({ companies });
  });

  fastify.put(
    '/cias/:id',
    async (
      request: FastifyRequest<{ Body: Company; Params: FastifyRequest }>,
      reply,
    ) => {
      const { id } = request.params;
      const { name, address, tradeName, cnpj } = request.body;

      const upDate = await prismaClient.company.update({
        data: {
          name,
          cnpj,
          tradeName,
          address,
        },
        where: {
          id,
        },
        select: {
          id: true,
          name: true,
        },
      });

      reply.send({ upDate });
    },
  );

  fastify.delete(
    '/cias/:id',
    async (request: FastifyRequest<{ Params: FastifyRequest }>, reply) => {
      const { id } = request.params;

      const deleteUser = await prismaClient.company.delete({
        where: { id },
        select: { id: true, cnpj: true },
      });

      reply.send({ deleteUser });
    },
  );
};
