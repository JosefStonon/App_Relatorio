import type { IformData } from '@/views/components/form';
import HttpClient from './Utils/HttpClient';

class CompanyService {
  HttpClient: HttpClient;

  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3001');
  }

  async createCompany(companies: IformData) {
    return this.HttpClient.post(`/companies`, companies);
  }
}

export default new CompanyService();
