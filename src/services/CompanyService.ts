import type { IformData } from '@/views/components/form';
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

  getCompany() {
    return this.HttpClient.get<IformData[]>('/companies', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export default new CompanyService();
