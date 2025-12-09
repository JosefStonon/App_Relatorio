export interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
  headers?: Record<string, string>;
}

export type Idata = {
  invoices: IformData[];
  onConfirm: (id: string) => Promise<void>;
};

export type IdataMachine = {
  invoices: ImachineData[];
};

export interface IformData {
  id?: string;
  nameCompany: string;
  tradeName: string;
  cnpj: number;
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export interface ImachineData {
  nameMachine: string;
  tagEquipment: string;
  haritage: string;
  utility: string;
  brenchModel: string;
  serie: string;
  capacity: string;
  companyId: string;
}

export interface Ierrors {
  field: string;
  message: string;
}
