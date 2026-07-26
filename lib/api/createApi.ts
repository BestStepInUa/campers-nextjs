import { FetchError } from './FetchError';

type Primitive = string | number | boolean;

type ApiOptions = Omit<RequestInit, 'body'> & {
  params?: Record<string, Primitive | undefined | null>;
  body?: BodyInit | Record<string, unknown> | null;
};

export function createApi(baseUrl: string) {
  const API_URL = baseUrl.replace(/\/$/, '');

  return async function api<T>(
    path: string,
    { params, headers, body, ...options }: ApiOptions = {}
  ): Promise<T> {
    const url = new URL(`${API_URL}${path}`);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          url.searchParams.set(key, String(value));
        }
      });
    }

    const requestHeaders = new Headers(headers);

    let requestBody: BodyInit | undefined;

    if (body != null) {
      if (
        body instanceof FormData ||
        body instanceof URLSearchParams ||
        body instanceof Blob ||
        typeof body === 'string'
      ) {
        requestBody = body;
      } else {
        requestHeaders.set('Content-Type', 'application/json');
        requestBody = JSON.stringify(body);
      }
    }

    const response = await fetch(url, {
      ...options,
      headers: requestHeaders,
      body: requestBody,
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

    if (response.status === 204) {
      return undefined as T;
    }

    return response.json() as Promise<T>;
  };
}
