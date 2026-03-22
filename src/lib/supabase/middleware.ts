import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Public routes exception
  const isAuthRoute = request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/signup') || request.nextUrl.pathname.startsWith('/auth')
  if (!user && !isAuthRoute && request.nextUrl.pathname !== '/') {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // Role routing enforcement
  if (user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (profile) {
      if (profile.role === 'doctor' && request.nextUrl.pathname.startsWith('/patient')) {
        return NextResponse.redirect(new URL('/doctor', request.url))
      }
      if (profile.role === 'patient' && request.nextUrl.pathname.startsWith('/doctor')) {
        return NextResponse.redirect(new URL('/patient', request.url))
      }
      if (request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL(`/${profile.role}`, request.url))
      }
      if (isAuthRoute) {
        return NextResponse.redirect(new URL(`/${profile.role}`, request.url))
      }
    }
  }

  return supabaseResponse
}
