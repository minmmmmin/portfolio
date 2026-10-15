import { Link, NavLink } from 'react-router'
import { css } from 'styled-system/css'
import { Animal } from './Animal'
import { container } from './styles'

const nav = [
  { to: '/about', label: 'About' },
  { to: '/works', label: 'Works' },
  { to: '/talks', label: 'Talks' },
  { to: '/experience', label: 'Experience' },
]

const navLink = css({
  display: 'inline-block',
  py: '1',
  color: 'fg',
  textDecoration: 'none',
  textDecorationThickness: '0.45em',
  textUnderlineOffset: '-0.2em',
  textDecorationSkipInk: 'none',
  textDecorationColor: 'yellow',
  _hover: { textDecorationLine: 'underline' },
  '&[aria-current="page"]': { textDecorationLine: 'underline' },
})

export function Header() {
  return (
    <header className={container}>
      <div
        className={css({
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          rowGap: '2',
          columnGap: '6',
          pt: { base: '5', md: '8' },
          pb: '2',
        })}
      >
        <Link
          to="/"
          className={css({
            display: 'inline-flex',
            alignItems: 'flex-end',
            gap: '2',
            fontSize: { base: '1.6rem', md: '1.9rem' },
            color: 'fg',
            textDecoration: 'none',
            lineHeight: '1',
          })}
        >
          <Animal name="piyo" width={40} motion="wobble" className={css({ width: { base: '32px', md: '40px' }, height: 'auto' })} />
          <span>
            min<span className={css({ fontSize: '0.6em', ml: '0.1em' })}>のポートフォリオ</span>
          </span>
        </Link>
        <nav aria-label="メイン">
          <ul className={css({ display: 'flex', flexWrap: 'wrap', columnGap: { base: '5', md: '8' }, fontSize: { base: '1rem', md: '1.1rem' } })}>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={navLink}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
