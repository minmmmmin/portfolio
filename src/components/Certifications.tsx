import { css } from 'styled-system/css'
import { getCertifications } from '../data'

const formatMonth = (d: string) => d.replace('-', '.')

export function Certifications() {
  return (
    <ul className={css({ display: 'grid', gap: '3' })}>
      {getCertifications().map((c) => (
        <li
          key={c.name}
          className={css({
            display: 'grid',
            gridTemplateColumns: { base: '5.5rem 1fr', sm: '9rem 1fr' },
            columnGap: '6',
            alignItems: 'baseline',
          })}
        >
          <time dateTime={c.date} className={css({ color: 'fgMuted', fontSize: '0.9rem', fontVariantNumeric: 'tabular-nums' })}>
            {formatMonth(c.date)}
          </time>
          <span className={css({ fontSize: { base: '1.05rem', md: '1.15rem' } })}>{c.name}</span>
        </li>
      ))}
    </ul>
  )
}
