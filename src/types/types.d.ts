import 'fastify';

export interface Company {
  id: string;
  nameCompany: string;
  tradeName: string;
  cnpj: string;
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export interface Machine {
  id: string;
  companyId: string;
  avaliation: string;
  nameMachine: string;
  tagEquipment: string;
  haritage: string;
  utility?: string;
  brenchModel: string;
  serie?: string;
  capacity?: string;
  nameCompany: string;
}

export interface Avaliation {
  id: string;
  machineId: string;
  dateAvaliation: string;
  categoryRisk: string;
  levelRisk: string;
  riskDirect: string;
  faceMachine: string;
  onOff: string;
}
