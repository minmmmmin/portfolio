import type { ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { textLink } from './styles'

type Props = { href: string; children: ReactNode; className?: string }

export function ExternalLink({ href, children, className }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cx(textLink, className)}>
      {children}
      <span aria-hidden="true" className={css({ fontSize: '0.8em', ml: '0.15em' })}>
        ↗
      </span>
      <span className={css({ srOnly: true })}>（新しいタブで開く）</span>
    </a>
  )
}
