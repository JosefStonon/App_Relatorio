import type { ImachineData } from '../types';
import HttpClient from './Utils/HttpClient';

class MachineServices {
  HttpClient: HttpClient;
  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3001');
  }
  async createMachine(data: ImachineData) {
    return this.HttpClient.post(`/machines/mach`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data,
    });
  }

  getMachine() {
    return this.HttpClient.get<ImachineData[]>('/machines/mach', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export default new MachineServices();
