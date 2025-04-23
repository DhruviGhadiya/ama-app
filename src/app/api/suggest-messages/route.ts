// app/api/suggest-messages/route.ts or .js
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const data = "hello world"; // or whatever logic you have
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Something went wrong' }, { status: 500 });
  }
}
