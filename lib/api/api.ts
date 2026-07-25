import { createApi } from './createApi';

const NEXT_SERVER_URL = `${process.env['NEXT_PUBLIC_API_URL']}/api`.replace(
  /\/$/,
  ''
);

export const nextServer = createApi(NEXT_SERVER_URL);
