/* eslint-disable @next/next/no-server-import-in-page */
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { pathEqual } from 'path-equal'

import { module as core_module } from '@/modules/core/module'
import { module as auth_module } from '@/modules/auth/module'
import { module as m_ibdp_module } from '@/modules/m_ibdp/module'

const CHECK = (str: string, rule: string) => {
  var escapeRegex = (str: string) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')
  return new RegExp('^' + rule.split('*').map(escapeRegex).join('.*') + '$').test(str)
}

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  return NextResponse.next()
  // let PATHS: PATH[] = []

  // const AUTH_STATUS = JSON.parse(req.cookies['instance'] || 'false').secret ? 'AUTH' : 'NO_AUTH'
  // const MODULE_STATUS = JSON.parse(req.cookies['instance'] || 'false').activeModule
  //   ? JSON.parse(req.cookies['instance']).activeModule
  //   : null

  // const STATUS = [AUTH_STATUS, MODULE_STATUS]

  // PATHS = PATHS.concat(core_module().PATHS)
  // PATHS = PATHS.concat(auth_module().PATHS)
  // PATHS = PATHS.concat(m_ibdp_module().PATHS)

  // const URL = req.nextUrl

  // const RESULTS = PATHS.filter(P => {
  //   return CHECK(URL.pathname, P.source)
  // })

  // const ONE_MATCH = RESULTS.filter(P => {
  //   return P.require.every(S => {
  //     return STATUS.includes(S)
  //   })
  // })[0]

  // if (ONE_MATCH && ONE_MATCH.target) {
  //   URL.pathname = ONE_MATCH.target
  //   return NextResponse.rewrite(URL)
  // }
  // if (ONE_MATCH && ONE_MATCH.prepend) {
  //   URL.pathname = ONE_MATCH.prepend + URL.pathname
  //   return NextResponse.rewrite(URL)
  // } else if (ONE_MATCH) {
  //   return NextResponse.next()
  // } else if (RESULTS[0] && RESULTS[0].deny) {
  //   URL.pathname = RESULTS[0].deny
  //   return NextResponse.redirect(URL)
  // } else {
  //   return NextResponse.next()
  // }
}
