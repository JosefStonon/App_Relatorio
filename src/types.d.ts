export interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
  headers?: Record<string, string>;
}

export type Idata = {
  invoices: IformData[];
};

export interface IformData {
  id?: string;
  nameCompany: string;
  tradeName: string;
  cnpj: number;
  address: string;
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
