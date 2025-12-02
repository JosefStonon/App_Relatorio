import { FastifyPluginAsync, FastifyRequest } from 'fastify';
import { prismaClient } from '../lib';
import { Company } from '../types/types';

export const routesCompany: FastifyPluginAsync = async (fastify) => {
  fastify.post(
    '/',
    async (request: FastifyRequest<{ Body: Company }>, reply) => {
      const { id, address, cnpj, name, tradeName } = request.body;

      const companies = await prismaClient.company.create({
        data: {
          id,
          name,
          tradeName,
          cnpj,
          address,
        },
        select: {
          id: true,
          name: true,
          tradeName: true,
          cnpj: true,
          address: true,
        },
      });

      reply.code(201).send(companies);
    },
  );

  fastify.get('/', async (request: FastifyRequest, reply) => {
    const companies = await prismaClient.company.findMany({
      select: {
        machines: {
          select: {
            nameMachine: true,
            tagEquipment: true,
            haritage: true,
            avaliation: true,
            brenchModel: true,
            serie: true,
            capacity: true,
            utility: true,
            companyId: true,
          },
        },
        id: true,
        name: true,
        cnpj: true,
        address: true,
        tradeName: true,
      },
    });

    reply.code(201).send(companies);
  });

  fastify.put(
    '/:id',
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

      reply.send(upDate);
    },
  );

  fastify.delete(
    '/:id',
    async (request: FastifyRequest<{ Params: FastifyRequest }>, reply) => {
      const { id } = request.params;

      const deleteUser = await prismaClient.company.delete({
        where: { id },
        select: { id: true, cnpj: true },
      });

      reply.send(deleteUser);
    },
  );
};
