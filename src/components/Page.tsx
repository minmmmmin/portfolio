import { useEffect, type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { container } from './styles'

/** ページ共通の余白とタイトル設定 */
export function Page({ title, children }: { title?: string; children: ReactNode }) {
  useEffect(() => {
    document.title = title ? `${title} | minのポートフォリオ` : 'minのポートフォリオ'
  }, [title])

  return <div className={cx(container, css({ pt: { base: '10', md: '16' } }))}>{children}</div>
}

export function Section({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <section aria-label={label} className={css({ mt: { base: '20', md: '28' } })}>
      {children}
    </section>
  )
}
