class HttpClient {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async post<T, Body = unknown>(path: string, body: Body): Promise<T> {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    return response.json() as Promise<T>;
  }
}

export default HttpClient;
