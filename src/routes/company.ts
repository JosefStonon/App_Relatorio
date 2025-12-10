import { FastifyPluginAsync, FastifyRequest } from 'fastify';
import { prismaClient } from '../lib';
import { Company } from '../types/types';

export const routesCompany: FastifyPluginAsync = async (fastify) => {
  fastify.post(
    '/',
    async (request: FastifyRequest<{ Body: Company }>, reply) => {
      const {
        id,
        cep,
        rua,
        numero,
        bairro,
        cidade,
        estado,
        cnpj,
        nameCompany,
        tradeName,
      } = request.body;

      const companies = await prismaClient.company.create({
        data: {
          id,
          nameCompany,
          tradeName,
          cnpj,
          cep,
          rua,
          numero,
          bairro,
          cidade,
          estado,
        },
        select: {
          id: true,
          nameCompany: true,
          tradeName: true,
          cnpj: true,
          cep: true,
          rua: true,
          numero: true,
          bairro: true,
          cidade: true,
          estado: true,
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
            id: true,
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
        nameCompany: true,
        cnpj: true,
        tradeName: true,
        cep: true,
        rua: true,
        numero: true,
        bairro: true,
        cidade: true,
        estado: true,
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
      const {
        nameCompany,
        cep,
        rua,
        numero,
        bairro,
        cidade,
        estado,
        tradeName,
        cnpj,
      } = request.body;

      const upDate = await prismaClient.company.update({
        data: {
          nameCompany,
          cnpj,
          tradeName,
          cep,
          rua,
          numero,
          bairro,
          cidade,
          estado,
        },
        where: {
          id,
        },
        select: {
          id: true,
          nameCompany: true,
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
