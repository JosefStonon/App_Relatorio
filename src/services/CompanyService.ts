import type { IformData } from '../types';
import HttpClient from './Utils/HttpClient';

class CompanyService {
  HttpClient: HttpClient;

  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3001');
  }

  async createCompany(data: IformData) {
    return this.HttpClient.post(`/companies`, {
      method: 'POST',
      body: data,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async getCompany() {
    return this.HttpClient.get<IformData[]>('/companies', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  upDateCompany(id: string, data: IformData) {
    return this.HttpClient.put(`/companies/${id}`, {
      method: 'PUT',
      body: data,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  deleteCompany(id: string) {
    return this.HttpClient.delete(`/companies/${id}`, {
      method: 'DELETE',
    });
  }
}

export default new CompanyService();
