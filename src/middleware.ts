import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Handle root URL redirect
  if (pathname === '/') {
    // Detect browser language from Accept-Language header
    const acceptLanguage = request.headers.get('accept-language') || '';
    const prefersTurkish = acceptLanguage.toLowerCase().includes('tr');
    
    // Redirect to appropriate locale
    const locale = prefersTurkish ? 'tr' : 'en';
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
