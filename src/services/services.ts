const API_URL = 'http://localhost:3333';

export async function createCompany(data: any) {
  const res = await fetch(`${API_URL}/company`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Erro ao salvar dados');
  }

  return await res.json();
}
