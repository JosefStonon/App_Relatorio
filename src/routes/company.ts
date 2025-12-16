import ejs from 'ejs';
import { FastifyPluginAsync, FastifyRequest } from 'fastify';
import path from 'path';
import puppeteer from 'puppeteer';
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

  fastify.get(
    '/pdf/:id/download',
    async (request: FastifyRequest<{ Params: { id: string } }>, reply) => {
      const { id } = request.params;
      const company = await prismaClient.company.findUnique({
        where: { id: id },
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

      if (!company) {
        return reply.code(404).send({ message: 'Company not found' });
      }

      const filePath = path.join(__dirname, '../lib/templates/index.ejs');
      let htmlGenerated: string;
      try {
        htmlGenerated = await ejs.renderFile(filePath, { company });
      } catch (err) {
        console.error('Error rendering EJS template:', err);
        return reply.code(500).send({ message: 'Error generating PDF' });
      }

      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();

      await page.setContent(htmlGenerated, {
        waitUntil: 'networkidle0',
      });

      const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: {
          top: '20px',
          bottom: '40px',
          left: '20px',
          right: '20px',
        },
      });

      reply
        .headers({ 'Content-Type': 'application/pdf' })
        .header('Content-Type', 'application/pdf')
        .header('Content-Disposition', 'inline; filename=company.pdf');

      await browser.close();

      reply.send(pdfBuffer);

      /*  */
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
