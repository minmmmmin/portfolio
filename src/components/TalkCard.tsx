import { css } from 'styled-system/css'
import type { Talk } from '../types/content'
import { ExternalLink } from './ExternalLink'
import { Thumb, cardGrid } from './WorkCard'

export const formatDate = (d: string) => d.replaceAll('-', '.')

export function TalkCard({ talk }: { talk: Talk }) {
  return (
    <article className={css({ display: 'flex', flexDirection: 'column', gap: '4', height: '100%' })}>
      {talk.slidesUrl ? (
        // 表紙を押してもスライドに飛べる
        <a
          href={talk.slidesUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className={css({ display: 'block' })}
        >
          <Thumb src={talk.thumbnail} label={talk.title} ratio="16 / 9" />
        </a>
      ) : (
        <Thumb src={talk.thumbnail} label={talk.title} ratio="16 / 9" />
      )}
      <div className={css({ display: 'flex', flexDirection: 'column', flex: '1' })}>
        <time dateTime={talk.date} className={css({ fontSize: '0.8rem', color: 'fgMuted', fontVariantNumeric: 'tabular-nums' })}>
          {formatDate(talk.date)}
        </time>
        <h3 className={css({ fontSize: '1.15rem', fontWeight: 'normal', lineHeight: '1.6' })}>{talk.title}</h3>
        <p className={css({ mt: '1', fontSize: '0.85rem', color: 'fgMuted' })}>
          {talk.eventUrl ? <ExternalLink href={talk.eventUrl}>{talk.event}</ExternalLink> : talk.event}
        </p>
        {talk.slidesUrl && (
          <p className={css({ mt: 'auto', pt: '3', fontSize: '0.9rem' })}>
            <ExternalLink href={talk.slidesUrl}>スライド</ExternalLink>
          </p>
        )}
      </div>
    </article>
  )
}

export function TalkGrid({ talks }: { talks: Talk[] }) {
  return (
    <ul className={cardGrid}>
      {talks.map((t) => (
        <li key={t.slug}>
          <TalkCard talk={t} />
        </li>
      ))}
    </ul>
  )
}
