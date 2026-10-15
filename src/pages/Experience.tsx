import { css, cx } from 'styled-system/css'
import { Animal } from '../components/Animal'
import { Award } from '../components/Award'
import { ExternalLink } from '../components/ExternalLink'
import { Page } from '../components/Page'
import { PageHeading } from '../components/PageHeading'
import { getExperiences } from '../data'
import type { Experience as Item } from '../types/content'

function Body({ e }: { e: Item }) {
  return (
    <>
      <p className={css({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2', fontSize: '0.875rem', color: 'fgMuted' })}>
        <span>{e.period}</span>
        <span className={e.work ? css({ color: 'red' }) : undefined}>{e.label}</span>
        {e.award && <Award>{e.award}</Award>}
      </p>
      <h3 className={css({ fontWeight: 'normal', fontSize: { base: '1.15rem', md: '1.3rem' }, mt: '1', lineHeight: '1.5' })}>
        {e.url ? <ExternalLink href={e.url}>{e.title}</ExternalLink> : e.title}
      </h3>
      {e.description && <p className={css({ mt: '2', color: 'fgMuted', fontSize: '0.95rem' })}>{e.description}</p>}
    </>
  )
}

const dot = css({ width: '10px', height: '10px', borderRadius: 'full', border: '1.5px solid token(colors.ink)' })

const legend: [string, string][] = [
  [css({ bg: 'green.500' }), 'できごと'],
  [css({ bg: 'yellow' }), '受賞'],
  [css({ bg: 'red' }), 'おしごと'],
]

export function Experience() {
  const items = getExperiences()

  return (
    <Page title="これまでのこと">
      <PageHeading title="これまでのこと" />
      <p className={css({ mt: '4', display: 'flex', flexWrap: 'wrap', gap: '5', fontSize: '0.85rem', color: 'fgMuted' })}>
        {legend.map(([color, text]) => (
          <span key={text} className={css({ display: 'inline-flex', alignItems: 'center', gap: '2' })}>
            <span className={cx(dot, color)} aria-hidden="true" />
            {text}
          </span>
        ))}
      </p>

      <div className={css({ position: 'relative', mt: { base: '10', md: '14' } })}>
        <ol className={css({ borderLeft: '1.5px solid token(colors.ink)', ml: '1.5', maxWidth: '44rem' })}>
          {items.map((e) => (
            <li key={e.period + e.title} className={css({ position: 'relative', pl: { base: '6', md: '8' }, pb: '10', _last: { pb: '2' } })}>
              <span
                aria-hidden="true"
                className={css({
                  position: 'absolute',
                  left: '-7px',
                  top: '0.55em',
                  width: '12px',
                  height: '12px',
                  borderRadius: 'full',
                  bg: e.work ? 'red' : e.award ? 'yellow' : 'green.500',
                  border: '1.5px solid token(colors.ink)',
                })}
              />
              <Body e={e} />
            </li>
          ))}
        </ol>
        {/* タイムラインの横でにょろっと */}
        <Animal
          name="hebi"
          width={150}
          motion="bob"
          hideOnMobile
          className={css({ position: 'absolute', right: { md: '0', lg: '10' }, bottom: '0', width: '150px', height: 'auto' })}
        />
      </div>
    </Page>
  )
}
