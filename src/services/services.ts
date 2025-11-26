import type { IformData } from '@/views/components/form';

const API_URL = 'http://localhost:3001';

export async function createCompany(data: IformData) {
  const res = await fetch(`${API_URL}/companies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Erro ao salvar dados');
  }

  return await res.json();
}
