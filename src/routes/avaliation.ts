import { FastifyPluginAsync, FastifyRequest } from 'fastify';
import { prismaClient } from '../lib';
import { Avaliation } from '../types/types';

export const routesAvaliation: FastifyPluginAsync = async (fastify) => {
  fastify.post(
    '/',
    async (request: FastifyRequest<{ Body: Avaliation }>, reply) => {
      const {
        machineId,
        categoryRisk,
        levelRisk,
        riskDirect,
        faceMachine,
        onOff,
      } = request.body;

      const parseDate = new Date();

      const avaliationCreate = await prismaClient.avaliation.create({
        data: {
          machineId,
          date: parseDate,
          categoryRisk,
          levelRisk,
          riskDirect,
          faceMachine,
          onOff,
        },
        select: {
          id: true,
          machineId: true,
          date: true,
          categoryRisk: true,
          levelRisk: true,
          riskDirect: true,
          faceMachine: true,
          onOff: true,
        },
      });

      reply.code(201).send(avaliationCreate);
    },
  );
};
