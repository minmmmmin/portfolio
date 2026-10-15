import { css, cx } from 'styled-system/css'
import type { AnimalName } from '../animals'
import { Animal } from './Animal'
import { Grass } from './Grass'
import { SocialLinks } from './SocialLinks'
import { container } from './styles'

// スライドの下に並んでいる頭たち。スマホでは先頭3匹だけ
const lineup: AnimalName[] = ['kumasan', 'piyo', 'tora', 'pig', 'mouse', 'meee']

export function Footer() {
  return (
    <footer className={css({ mt: { base: '24', md: '36' } })}>
      <div
        className={cx(
          container,
          css({
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            rowGap: '3',
            columnGap: '8',
            fontSize: '0.9rem',
            color: 'fgMuted',
          }),
        )}
      >
        <SocialLinks variant="plain" />
        <p>© {new Date().getFullYear()} min</p>
      </div>

      {/* 草むらから頭だけ出ている。ホバーで1匹ずつぴょこっと */}
      <div
        aria-hidden="true"
        className={css({
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          gap: { base: '3', md: '5' },
          mt: '8',
          height: { base: '96px', md: '120px' },
          overflow: 'hidden',
        })}
      >
        <Grass layer="back" />
        {lineup.map((name, i) => (
          <div
            key={name}
            className={cx(
              css({
                position: 'relative',
                zIndex: 1,
                transform: 'translateY(-10%)',
                transition: 'transform 0.25s cubic-bezier(.3,1.6,.6,1)',
                _hover: { transform: 'translateY(-26%)' },
                width: { base: '72px', md: '96px' },
              }),
              i >= 3 && css({ display: { base: 'none', sm: 'block' } }),
            )}
          >
            <Animal name={name} width={96} className={css({ width: '100%', height: 'auto' })} />
          </div>
        ))}
        <Grass layer="front" />
      </div>
    </footer>
  )
}
