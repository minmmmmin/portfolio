import { Link, useParams } from 'react-router'
import { css, cx } from 'styled-system/css'
import { Award } from '../components/Award'
import { ExternalLink } from '../components/ExternalLink'
import { Page } from '../components/Page'
import { textLink } from '../components/styles'
import { TalkCard } from '../components/TalkCard'
import { Thumb, availableLinks, formatMonth, linkLabels, workMeta } from '../components/WorkCard'
import { getTalksBySlugs, getWork } from '../data'
import { NotFound } from './NotFound'

/** youtu.be/ID や youtube.com/watch?v=ID から ID を取り出す */
const youtubeId = (url?: string) => url?.match(/(?:youtu\.be\/|v=)([\w-]{11})/)?.[1]

export function WorkDetail() {
  const { slug = '' } = useParams()
  const work = getWork(slug)
  if (!work) return <NotFound />

  // detail を書いていない作品も、カードの情報だけでページを出す
  const detail = work.detail ?? { sections: [] }
  const links = availableLinks(work.links)
  const videoId = youtubeId(work.links.video)
  const talks = getTalksBySlugs(work.talks)
  const facts: [string, string | undefined][] = [
    ['期間', detail.period ?? (work.publishedAt && formatMonth(work.publishedAt))],
    ['どこで', work.context],
    ['チーム', detail.team],
    ['担当', detail.role],
    ['つかった技術', work.tags.join(' / ') || undefined],
  ]

  const shownFacts = facts.filter(([, v]) => v)

  return (
    <Page title={work.title}>
      <Link to="/works" className={cx(textLink, css({ fontSize: '0.95rem' }))}>
        ← つくったもの
      </Link>

      <header className={css({ mt: '8' })}>
        <p className={css({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', columnGap: '2', color: 'fgMuted', fontSize: '0.9rem' })}>
          <span>{workMeta(work)}</span>
          {work.award && <Award>{work.award}</Award>}
        </p>
        <h1 className={css({ fontWeight: 'normal', fontSize: { base: '2.25rem', md: '3.25rem' }, lineHeight: '1.3', mt: '1' })}>
          {work.title}
        </h1>
        <p className={css({ mt: '4', fontSize: { base: '1.05rem', md: '1.2rem' }, maxWidth: '40em' })}>{work.description}</p>
      </header>

      {/* サムネが無いときは大きな仮画像を出さない */}
      {work.thumbnail && (
        <div className={css({ mt: { base: '10', md: '12' } })}>
          <Thumb src={work.thumbnail} label={work.title} ratio="16 / 9" />
        </div>
      )}

      <div
        className={css({
          mt: { base: '12', md: '16' },
          display: 'grid',
          gridTemplateColumns: { base: '1fr', lg: '18rem 1fr' },
          gap: { base: '12', lg: '16' },
          alignItems: 'start',
        })}
      >
        {/* 左：基本情報（PC ではスクロールしてもついてくる） */}
        <aside
          className={css({
            position: { lg: 'sticky' },
            top: { lg: '8' },
            border: '1.5px solid token(colors.ink)',
            borderRadius: 'lg',
            bg: 'green.50',
            p: '6',
          })}
        >
          {shownFacts.length > 0 && (
            <dl className={css({ display: 'grid', gap: '4', mb: '6' })}>
              {shownFacts.map(([k, v]) => (
                <div key={k}>
                  <dt className={css({ fontSize: '0.8rem', color: 'green.700' })}>{k}</dt>
                  <dd className={css({ fontSize: '0.95rem' })}>{v}</dd>
                </div>
              ))}
            </dl>
          )}
          {links.length > 0 && (
            <ul className={css({ display: 'flex', flexWrap: 'wrap', columnGap: '5', rowGap: '1', fontSize: '0.95rem' })}>
              {links.map((k) => (
                <li key={k}>
                  <ExternalLink href={work.links[k]!}>{linkLabels[k]}</ExternalLink>
                </li>
              ))}
            </ul>
          )}
        </aside>

        {/* 右：本文 */}
        <div className={css({ display: 'grid', gap: { base: '12', md: '14' }, maxWidth: '44rem' })}>
          {detail.sections.length === 0 && !videoId && talks.length === 0 && (
            <p className={css({ color: 'fgMuted' })}>くわしいことは、まだ書いていません。</p>
          )}
          {detail.sections.map((sec) => (
            <section key={sec.heading}>
              <h2 className={css({ fontWeight: 'normal', fontSize: { base: '1.4rem', md: '1.6rem' } })}>{sec.heading}</h2>
              {sec.text?.map((t) => (
                <p key={t} className={css({ mt: '3' })}>
                  {t}
                </p>
              ))}
              {sec.list && (
                <ul className={css({ mt: '3', display: 'grid', gap: '1.5' })}>
                  {sec.list.map((t) => (
                    <li key={t} className={css({ position: 'relative', pl: '5' })}>
                      <span
                        aria-hidden="true"
                        className={css({
                          position: 'absolute',
                          left: '0',
                          top: '0.7em',
                          width: '8px',
                          height: '8px',
                          borderRadius: 'full',
                          bg: 'green.500',
                        })}
                      />
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {talks.length > 0 && (
            <section>
              <h2 className={css({ fontWeight: 'normal', fontSize: { base: '1.4rem', md: '1.6rem' } })}>LT でもはなしました</h2>
              <ul
                className={css({
                  mt: '5',
                  display: 'grid',
                  gridTemplateColumns: { base: '1fr', sm: 'repeat(2, 1fr)' },
                  gap: '8',
                })}
              >
                {talks.map((t) => (
                  <li key={t.slug}>
                    <TalkCard talk={t} />
                  </li>
                ))}
              </ul>
            </section>
          )}

          {videoId && (
            <section>
              <h2 className={css({ fontWeight: 'normal', fontSize: { base: '1.4rem', md: '1.6rem' } })}>紹介動画</h2>
              <div
                className={css({
                  mt: '4',
                  aspectRatio: '16 / 9',
                  border: '1.5px solid token(colors.ink)',
                  borderRadius: 'md',
                  overflow: 'hidden',
                })}
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                  title={`${work.title} の紹介動画`}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={css({ width: '100%', height: '100%', border: '0' })}
                />
              </div>
            </section>
          )}
        </div>
      </div>
    </Page>
  )
}
