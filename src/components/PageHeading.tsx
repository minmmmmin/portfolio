import type { ReactNode } from 'react'
import { css } from 'styled-system/css'

type Props = {
  title: string
  lead?: string
  /** 見出しの横に置く動物など */
  aside?: ReactNode
  as?: 'h1' | 'h2'
}

export function PageHeading({ title, lead, aside, as: Tag = 'h1' }: Props) {
  const big = Tag === 'h1'
  return (
    <div className={css({ display: 'flex', alignItems: 'flex-end', gap: '4', position: 'relative' })}>
      <div className={css({ flex: '1', minWidth: '0' })}>
        <Tag
          className={css({
            fontWeight: 'normal',
            lineHeight: '1.3',
            letterSpacing: '0.04em',
            fontSize: big ? { base: '2.25rem', md: '3.25rem' } : { base: '1.6rem', md: '2rem' },
          })}
        >
          {title}
        </Tag>
        {lead && (
          <p className={css({ mt: '3', color: 'fgMuted', fontSize: { base: '0.95rem', md: '1rem' } })}>{lead}</p>
        )}
      </div>
      {aside}
    </div>
  )
}
