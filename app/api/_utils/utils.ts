import { NextResponse } from 'next/server';
import { FetchError } from '@/lib/api/FetchError';

export function logErrorResponse(errorObj: unknown): void {
  const green = '\x1b[32m';
  const yellow = '\x1b[33m';
  const reset = '\x1b[0m';

  console.log(`${green}> ${yellow}Error Response Data:${reset}`);
  console.dir(errorObj, { depth: null, colors: true });
}

export function createErrorResponse(error: unknown) {
  if (error instanceof FetchError) {
    logErrorResponse(error.response);

    return NextResponse.json(
      {
        error: error.message,
        response: error.response,
      },
      {
        status: error.status,
      }
    );
  }

  logErrorResponse(error);

  return NextResponse.json(
    {
      error: 'Internal Server Error',
    },
    {
      status: 500,
    }
  );
}
