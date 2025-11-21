import { FastifyPluginAsync, FastifyRequest } from 'fastify';
import { prismaClient } from '../lib';
import { Machine } from '../types/types';

export const routesMachine: FastifyPluginAsync = async (fastify) => {
  fastify.post(
    '/mac',
    async (request: FastifyRequest<{ Body: Machine }>, reply) => {
      const {
        nameMachine,
        tagEquipment,
        capacity,
        haritage,
        brenchModel,
        serie,
        utility,
        companyId,
      } = request.body;

      const machines = await prismaClient.machine.create({
        data: {
          nameMachine,
          tagEquipment,
          capacity,
          haritage,
          brenchModel,
          serie,
          utility,
          companyId,
        },
      });

      reply.code(201).send(machines);
    },
  );

  fastify.get(
    '/mac',
    async (request: FastifyRequest<{ Body: Machine }>, reply) => {
      const machines = await prismaClient.machine.findMany({
        select: {
          id: true,
          nameMachine: true,
          avaliation: true,
          tagEquipment: true,
          capacity: true,
          haritage: true,
          brenchModel: true,
          serie: true,
          utility: true,
          companyId: true,
        },
      });
      reply.send(machines);
    },
  );

  fastify.put(
    '/mac/:id',
    async (
      request: FastifyRequest<{ Body: Machine; Params: { id: string } }>,
      reply,
    ) => {
      const { id } = request.params;
      const {
        nameMachine,
        tagEquipment,
        capacity,
        haritage,
        brenchModel,
        serie,
        utility,
        companyId,
      } = request.body;

      const upDate = await prismaClient.machine.update({
        data: {
          nameMachine,
          tagEquipment,
          capacity,
          haritage,
          brenchModel,
          serie,
          utility,
          companyId,
        },
        where: {
          id,
        },
        select: {
          id: true,
          nameMachine: true,
          avaliation: true,
          tagEquipment: true,
          capacity: true,
          haritage: true,
          brenchModel: true,
          serie: true,
          utility: true,
          companyId: true,
        },
      });

      reply.send({ upDate });
    },
  );

  fastify.delete(
    '/mac/:id',
    async (request: FastifyRequest<{ Params: { id: string } }>, reply) => {
      const { id } = request.params;

      const deleteMachine = await prismaClient.machine.delete({
        where: { id },
        select: { id: true, nameMachine: true },
      });

      reply.send({ deleteMachine });
    },
  );
};
