import { Link } from 'react-router'
import { css, cx } from 'styled-system/css'
import { Award } from './Award'
import type { Links, Work, WorkCategory } from '../types/content'

export const linkLabels: Record<keyof Links, string> = {
  demo: 'Demo',
  github: 'GitHub',
  slides: 'スライド',
  article: '記事',
  video: '動画',
}

export const categoryLabels: Record<WorkCategory, string> = { research: '研究', personal: '個人', team: 'チーム' }

export const formatMonth = (d: string) => d.slice(0, 7).replace('-', '.')

/** 画像の枠。サムネが無いときは名前を書いておく */
export function Thumb({ src, label, ratio = '16 / 10' }: { src?: string; label: string; ratio?: string }) {
  return (
    <div
      className={css({
        aspectRatio: ratio,
        border: '1.5px solid token(colors.ink)',
        borderRadius: 'md',
        overflow: 'hidden',
        bg: 'green.100',
      })}
    >
      {src ? (
        <img
          src={src}
          alt=""
          loading="lazy"
          className={css({ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' })}
        />
      ) : (
        <div
          aria-hidden="true"
          className={css({
            height: '100%',
            display: 'grid',
            placeItems: 'center',
            p: '6',
            textAlign: 'center',
            fontSize: { base: '1.4rem', md: '1.6rem' },
            lineHeight: '1.4',
            color: 'green.700',
          })}
        >
          {label}
        </div>
      )}
    </div>
  )
}

export const workMeta = (work: Work) =>
  [categoryLabels[work.category], work.context, work.publishedAt && formatMonth(work.publishedAt)]
    .filter(Boolean)
    .join(' / ')

export const availableLinks = (links: Links) => (Object.keys(linkLabels) as (keyof Links)[]).filter((k) => links[k])

/** カード全体が詳細ページへのリンク */
export function WorkCard({ work }: { work: Work }) {
  return (
    <Link
      to={`/works/${work.slug}`}
      className={cx(
        'group',
        css({ display: 'flex', flexDirection: 'column', gap: '4', height: '100%', color: 'fg', textDecoration: 'none', borderRadius: 'md' }),
      )}
    >
      <div
        className={css({
          transition: 'transform 0.2s',
          _groupHover: { transform: 'translateY(-3px)' },
        })}
      >
        <Thumb src={work.thumbnail} label={work.title} />
      </div>
      <div>
        <p className={css({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', columnGap: '2', fontSize: '0.8rem', color: 'fgMuted' })}>
          <span>{workMeta(work)}</span>
          {work.award && <Award>{work.award}</Award>}
        </p>
        <h3
          className={css({
            fontSize: '1.3rem',
            fontWeight: 'normal',
            lineHeight: '1.5',
            textDecorationColor: 'yellow',
            textDecorationThickness: '0.45em',
            textUnderlineOffset: '-0.2em',
            textDecorationSkipInk: 'none',
            _groupHover: { textDecorationLine: 'underline' },
          })}
        >
          {work.title}
        </h3>
        <p className={css({ mt: '1.5', fontSize: '0.95rem' })}>{work.description}</p>
        {work.tags.length > 0 && (
          <p className={css({ mt: '2', fontSize: '0.8rem', color: 'fgMuted' })}>{work.tags.join(' / ')}</p>
        )}
      </div>
    </Link>
  )
}

export const cardGrid = css({
  display: 'grid',
  gridTemplateColumns: { base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
  rowGap: { base: '12', md: '14' },
  columnGap: { base: '6', md: '8' },
})

export function WorkGrid({ works }: { works: Work[] }) {
  return (
    <ul className={cardGrid}>
      {works.map((w) => (
        <li key={w.slug}>
          <WorkCard work={w} />
        </li>
      ))}
    </ul>
  )
}
