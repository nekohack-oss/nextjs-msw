import { rest } from 'msw'
import { Source } from '../types/source'

export const handlers = [
  rest.get('https://myapi.dev/ssr', (_, res, ctx) => {
    return res(
      ctx.json({
        title: 'SSR Source',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      } as Source)
    )
  })
]
