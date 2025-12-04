import type { RequestOptions } from '../../types';

class HttpClient {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  get<T>(path: string, option?: RequestOptions) {
    return this.makeRequest<T>(path, {
      method: 'GET',
      ...option,
    });
  }

  post<T>(path: string, option?: RequestOptions) {
    return this.makeRequest<T>(path, {
      method: 'POST',
      ...option,
    });
  }

  async makeRequest<T>(path: string, option: RequestOptions): Promise<T> {
    const headers = new Headers();

    // if (option.body) {
    //   headers.append(
    //     'Content-Type', 'application/json'
    //   )
    // };

    if (option.headers) {
      Object.entries(option.headers).forEach(([name, value]) => {
        headers.append(name, value);
      });
    }
    const response = await fetch(`${this.baseURL}${path}`, {
      method: option.method,
      headers,
      body: JSON.stringify(option.body),
    });

    if (!response.ok) throw new Error(`Erro HTTP ${response.status}`);

    return response.json();
  }
}

export default HttpClient;
