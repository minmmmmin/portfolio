import { Link } from 'react-router'
import { css, cx } from 'styled-system/css'
import { Animal } from '../components/Animal'
import { Award } from '../components/Award'
import { Page, Section } from '../components/Page'
import { PageHeading } from '../components/PageHeading'
import { Skills } from '../components/Skills'
import { SocialLinks } from '../components/SocialLinks'
import { textLink } from '../components/styles'
import { TalkGrid, formatDate } from '../components/TalkCard'
import { WorkGrid } from '../components/WorkCard'
import { getCertifications, getExperiences, getFeaturedWorks, getRecentActivities, getRecentTalks, profile } from '../data'

const moreLink = css({ fontSize: '0.95rem', whiteSpace: 'nowrap' })

/** 見出しと「ぜんぶ見る」を横に並べる */
function SectionHead({ title, to }: { title: string; to: string }) {
  return (
    <div className={css({ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '4' })}>
      <PageHeading as="h2" title={title} />
      <Link to={to} className={cx(textLink, moreLink)}>
        ぜんぶ見る
      </Link>
    </div>
  )
}

export function Home() {
  return (
    <Page>
      <Hero />

      <Section label="つくったもの">
        <SectionHead title="つくったもの" to="/works" />
        <div className={css({ mt: { base: '8', md: '10' } })}>
          <WorkGrid works={getFeaturedWorks()} />
        </div>
      </Section>

      <Section label="はなしたこと">
        <SectionHead title="はなしたこと" to="/talks" />
        <div className={css({ mt: { base: '8', md: '10' } })}>
          <TalkGrid talks={getRecentTalks()} />
        </div>
      </Section>

      <Section label="わたしのこと">
        <PageHeading as="h2" title="わたしのこと" />
        <div
          className={css({
            mt: { base: '8', md: '10' },
            display: 'grid',
            gridTemplateColumns: { base: '1fr', md: '1fr 1fr' },
            gap: { base: '10', md: '16' },
          })}
        >
          <AboutSnippet />
          <ExperienceSnippet />
        </div>
      </Section>
    </Page>
  )
}

function Hero() {
  const activities = getRecentActivities()
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: { base: '1fr', lg: '1.25fr 1fr' },
        gap: { base: '12', lg: '16' },
        alignItems: 'start',
        pt: { base: '2', md: '6' },
      })}
    >
      <div>
        <div className={css({ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', columnGap: { base: '4', md: '6' }, rowGap: '2' })}>
          <h1
            className={css({
              fontWeight: 'normal',
              fontSize: { base: '3.6rem', md: '5.5rem' },
              lineHeight: '1',
              letterSpacing: '0.02em',
            })}
          >
            {profile.name}
            <span className={css({ fontSize: '0.36em', letterSpacing: '0.04em', ml: '0.15em', whiteSpace: 'nowrap' })}>のポートフォリオ</span>
          </h1>
          <Animal
            name="usagi"
            width={150}
            motion="bob"
            className={css({ width: { base: '72px', md: '110px' }, height: 'auto', mb: '1' })}
          />
        </div>
        <div className={css({ mt: '6', display: 'grid', gap: '1', fontSize: { base: '1.05rem', md: '1.2rem' }, maxWidth: '34em' })}>
          {profile.intro.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <SocialLinks className={css({ mt: '8' })} />
      </div>

      {/* さいきんのこと：登壇と作品を新しい順に */}
      <div
        className={css({
          border: '1.5px solid token(colors.ink)',
          borderRadius: 'lg',
          bg: 'green.50',
          px: { base: '5', md: '7' },
          py: { base: '5', md: '6' },
        })}
      >
        <h2 className={css({ fontWeight: 'normal', fontSize: '1.05rem', color: 'green.700' })}>さいきん</h2>
        <ul className={css({ mt: '2' })}>
          {activities.map((a) => (
            <li
              key={a.kind + a.title}
              className={css({
                display: 'grid',
                gridTemplateColumns: { base: '1fr', sm: '5.5rem 1fr' },
                columnGap: '3',
                py: '2.5',
                borderTop: '1.5px dashed token(colors.green.300)',
                _first: { borderTop: 'none' },
              })}
            >
              <span className={css({ fontSize: '0.8rem', color: 'fgMuted', pt: '0.5', fontVariantNumeric: 'tabular-nums' })}>
                {formatDate(a.date)}
              </span>
              <Link to={a.to} className={css({ color: 'fg', textDecoration: 'none', lineHeight: '1.6', _hover: { textDecoration: 'underline' } })}>
                <span className={css({ fontSize: '0.75rem', color: 'green.700', mr: '2' })}>
                  {a.kind === 'talk' ? '登壇' : '制作'}
                </span>
                {a.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function AboutSnippet() {
  const rows: [string, string][] = [
    ['すきな分野', profile.interests.join('・')],
    ['しゅみ', profile.hobbies.join('・')],
    ['資格', getCertifications().map((c) => c.name).join(' / ')],
  ]
  return (
    <div>
      <dl className={css({ display: 'grid', gridTemplateColumns: { base: '1fr', sm: '6.5rem 1fr' }, columnGap: '4', rowGap: { base: '1', sm: '3' } })}>
        {rows.map(([k, v]) => (
          <div key={k} className={css({ display: 'contents' })}>
            <dt className={css({ color: 'fgMuted', fontSize: '0.9rem', pt: { base: '2', sm: '0.5' } })}>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      <div className={css({ mt: '6' })}>
        <Skills compact />
      </div>
      <Link to="/about" className={cx(textLink, css({ display: 'inline-block', mt: '6', fontSize: '0.95rem' }))}>
        じこしょうかいをもっと見る
      </Link>
    </div>
  )
}

function ExperienceSnippet() {
  const items = getExperiences().slice(0, 4)
  return (
    <div>
      <ul className={css({ display: 'grid', gap: '3' })}>
        {items.map((e) => (
          <li key={e.period + e.title} className={css({ display: 'grid', gridTemplateColumns: { base: '1fr', sm: '5.5rem 1fr' }, columnGap: '3' })}>
            <span className={css({ fontSize: '0.85rem', color: 'fgMuted', pt: '0.5' })}>{e.period}</span>
            <span>
              {e.title}
              {e.award && (
                <span className={css({ ml: '2' })}>
                  <Award>{e.award}</Award>
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>
      <Link to="/experience" className={cx(textLink, css({ display: 'inline-block', mt: '6', fontSize: '0.95rem' }))}>
        これまでのことをもっと見る
      </Link>
    </div>
  )
}
