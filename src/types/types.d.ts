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
