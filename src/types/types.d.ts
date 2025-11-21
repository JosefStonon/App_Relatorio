import 'fastify';

export interface Company {
  id: string;
  name: string;
  tradeName: string;
  cnpj: Float;
  address: string;
}

export interface Machine {
  id: string;
  companyId: string;
  avaliation: string;
  nameMachine: string;
  tagEquipment: string;
  haritage: Float;
  utility?: string;
  brenchModel: string;
  serie?: string;
  capacity?: string;
}
