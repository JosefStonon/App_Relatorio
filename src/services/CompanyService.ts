import type { IformData } from '../types';
import HttpClient from './Utils/HttpClient';

const API_URL = import.meta.env.VITE_API_URL;
class CompanyService {
  HttpClient: HttpClient;

  constructor() {
    this.HttpClient = new HttpClient(`${API_URL}`);
  }

  async createCompany(data: IformData) {
    return this.HttpClient.post(`/comp`, {
      method: 'POST',
      body: data,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async getCompany() {
    return this.HttpClient.get<IformData[]>('/comp', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  upDateCompany(id: string, data: IformData) {
    return this.HttpClient.put(`/comp/${id}`, {
      method: 'PUT',
      body: data,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  deleteCompany(id: string) {
    return this.HttpClient.delete(`/comp/${id}`, {
      method: 'DELETE',
    });
  }
}

export default new CompanyService();
