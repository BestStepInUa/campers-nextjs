import { NextResponse } from 'next/server';

import { api } from '@/app/api/api';
import { FiltersResponseDto } from '@/lib/api/serverApi';
import { createErrorResponse } from '@/app/api/_utils/utils';

export async function GET() {
  try {
    const response = await api<FiltersResponseDto>('/campers/filters');

    return NextResponse.json(response);
  } catch (error) {
    return createErrorResponse(error);
  }
}
