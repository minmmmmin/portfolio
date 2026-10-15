import { Link } from 'react-router'
import { css } from 'styled-system/css'
import { Animal } from '../components/Animal'
import { Page } from '../components/Page'
import { textLink } from '../components/styles'

export function NotFound() {
  return (
    <Page title="ページがないよ">
      <div className={css({ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6', pt: { md: '8' } })}>
        <Animal name="tashikani" width={160} motion="bob" />
        <h1 className={css({ fontWeight: 'normal', fontSize: { base: '1.75rem', md: '2.25rem' } })}>
          たしかに、ないね。
        </h1>
        <p>このページは見つかりませんでした。</p>
        <Link to="/" className={textLink}>
          トップにもどる
        </Link>
      </div>
    </Page>
  )
}
