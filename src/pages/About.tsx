import { css } from 'styled-system/css'
import { Animal } from '../components/Animal'
import { Certifications } from '../components/Certifications'
import { Page } from '../components/Page'
import { PageHeading } from '../components/PageHeading'
import { Skills } from '../components/Skills'
import { SocialLinks } from '../components/SocialLinks'
import { textLink } from '../components/styles'
import { profile } from '../data'

const marker = css({
  bg: 'linear-gradient(transparent 58%, token(colors.yellow) 58%)',
  px: '0.1em',
})

/** 「**ここ**」をマーカーにする */
function Marked({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className={marker} style={{ color: 'inherit' }}>
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  )
}

const sectionGap = css({ mt: { base: '20', md: '28' } })

export function About() {
  return (
    <Page title="じこしょうかい">
      <PageHeading title="じこしょうかい" />

      {/* SNS のアイコンになっている子たち */}
      {/* PC: 動物の右にふきだし / スマホ: 動物の下にふきだし */}
      <div
        className={css({
          display: 'flex',
          flexDirection: { base: 'column', md: 'row' },
          alignItems: { base: 'flex-start', md: 'center' },
          gap: { base: '5', md: '8' },
          mt: { base: '8', md: '10' },
        })}
      >
        <ul className={css({ display: 'flex', gap: { base: '3', md: '8' }, alignItems: 'flex-end', flexShrink: 0 })}>
          {profile.avatars.map((a) => {
            const caption = (
              <>
                {a.where} のアイコン
                {a.url && <span aria-hidden="true"> ↗</span>}
              </>
            )
            return (
              <li key={a.where} className={css({ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2' })}>
                <Animal name={a.animal} width={120} motion="wobble" className={css({ width: { base: '88px', md: '120px' }, height: 'auto' })} />
                <span className={css({ fontSize: '0.85rem', color: 'fgMuted' })}>
                  {a.url ? (
                    <a href={a.url} target="_blank" rel="noopener noreferrer" className={textLink}>
                      {caption}
                    </a>
                  ) : (
                    caption
                  )}
                </span>
              </li>
            )
          })}
        </ul>
        {/* 動物たちのふきだし（はなぞめフォント） */}
        <p
          className={css({
            position: 'relative',
            mb: { md: '8' },
            px: { base: '4', md: '7' },
            py: { base: '3', md: '4' },
            bg: 'white',
            border: '2.5px solid token(colors.ink)',
            borderRadius: '2rem',
            fontFamily: 'hand',
            fontSize: { base: '1.05rem', md: '1.5rem' },
            lineHeight: '1.5',
            letterSpacing: '0.06em',
            // ふきだしのしっぽ（スマホは上向き、PC は左向き）
            _before: {
              content: '""',
              position: 'absolute',
              left: { base: '12', md: '-9px' },
              top: { base: '-9px', md: '50%' },
              width: '16px',
              height: '16px',
              bg: 'white',
              borderLeft: '2.5px solid token(colors.ink)',
              borderBottom: '2.5px solid token(colors.ink)',
              transform: { base: 'rotate(135deg)', md: 'translateY(-50%) rotate(45deg)' },
            },
          })}
        >
          {profile.greeting}
        </p>
      </div>

      <div
        className={css({
          mt: { base: '8', md: '10' },
          display: 'grid',
          gap: { base: '3', md: '4' },
          fontSize: { base: '1.1rem', md: '1.3rem' },
          lineHeight: '1.9',
          maxWidth: '36em',
        })}
      >
        {profile.about.map((line) => (
          <p key={line}>
            <Marked text={line} />
          </p>
        ))}
      </div>
      <p className={css({ mt: '6', fontSize: '0.75rem', color: 'fgMuted' })}>
        ふきだしの文字は{' '}
        <a href="https://www.asterism-m.com/font/hanazomefont/" target="_blank" rel="noopener noreferrer" className={textLink}>
          はなぞめフォント
        </a>
        {' '}をつかっています。
      </p>

      <section aria-label="さわってる技術" className={sectionGap}>
        <PageHeading as="h2" title="さわってる技術" />
        <div className={css({ mt: '8' })}>
          <Skills />
        </div>
      </section>

      <section aria-label="もってる資格" className={sectionGap}>
        <PageHeading as="h2" title="もってる資格" />
        <div className={css({ mt: '8' })}>
          <Certifications />
        </div>
      </section>

      <section aria-label="ほかのところ" className={sectionGap}>
        <PageHeading as="h2" title="ほかのところにもいます" />
        <SocialLinks className={css({ mt: '8' })} />
      </section>
    </Page>
  )
}
