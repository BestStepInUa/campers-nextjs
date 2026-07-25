import { createApi } from '@/lib/api/createApi';

const BACKEND_URL = (process.env['NEXT_BACKEND_API_URL'] || '').replace(
  /\/$/,
  ''
);

export const api = createApi(BACKEND_URL);
