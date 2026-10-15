import { Outlet, ScrollRestoration } from 'react-router'
import { css } from 'styled-system/css'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  return (
    // 外側の緑が額縁、内側のアイボリーが台紙
    <div className={css({ p: { base: '2.5', md: '6' }, minHeight: '100dvh', display: 'flex' })}>
      <a
        href="#main"
        className={css({
          position: 'absolute',
          left: '4',
          top: '-20',
          zIndex: '10',
          bg: 'yellow',
          color: 'ink',
          px: '4',
          py: '2',
          borderRadius: 'sm',
          _focus: { top: '4' },
        })}
      >
        本文へスキップ
      </a>
      <div
        className={css({
          flex: '1',
          minWidth: '0',
          bg: 'paper',
          // 下は草むらが枠の緑につながるので角を丸めない
          borderTopRadius: { base: 'md', md: 'lg' },
          display: 'flex',
          flexDirection: 'column',
          // hidden だと詳細ページの sticky が効かなくなるので clip
          overflow: 'clip',
        })}
      >
        <Header />
        <main id="main" tabIndex={-1} className={css({ flex: '1', _focus: { outline: 'none' } })}>
          <Outlet />
        </main>
        <Footer />
      </div>
      <ScrollRestoration />
    </div>
  )
}
