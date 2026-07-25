import { FetchError } from './FetchError';

type ApiOptions = RequestInit & {
  params?: Record<string, string | number | boolean | undefined>;
};

export function createApi(baseUrl: string) {
  const API_URL = baseUrl.replace(/\/$/, '');

  return async function api<T>(
    path: string,
    { params, ...options }: ApiOptions = {}
  ): Promise<T> {
    const url = new URL(`${API_URL}${path}`);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          url.searchParams.set(key, String(value));
        }
      });
    }

    const response = await fetch(url, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      let data: unknown;

      try {
        data = await response.json();
      } catch {
        data = await response.text();
      }

      throw new FetchError(response.statusText, response.status, data);
    }

    return response.json() as Promise<T>;
  };
}
