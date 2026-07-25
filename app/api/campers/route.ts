import { NextRequest, NextResponse } from 'next/server';

import { api } from '@/app/api/api';
import { CamperListResponseDto } from '@/lib/api/serverApi';
import { createErrorResponse } from '@/app/api/_utils/utils';

export async function GET(request: NextRequest) {
  try {
    const location = request.nextUrl.searchParams.get('location') ?? '';
    const form = request.nextUrl.searchParams.get('form') ?? '';
    const transmission = request.nextUrl.searchParams.get('transmission') ?? '';
    const engine = request.nextUrl.searchParams.get('engine') ?? '';

    const response = await api<CamperListResponseDto>('/campers', {
      params: {
        location,
        form,
        transmission,
        engine,
        page: 1,
        perPage: 5,
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    return createErrorResponse(error);
  }
}
