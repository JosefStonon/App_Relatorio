export interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
  headers?: Record<string, string>;
}

export type Idata = {
  invoices: IformData[];
};

export interface IformData {
  name: string;
  tradeName: string;
  cnpj: number;
  address: string;
}

export interface Ierrors {
  field: string;
  message: string;
}
