import { css } from 'styled-system/css'
import { Animal } from '../components/Animal'
import { HandLine } from '../components/HandLine'
import { Page } from '../components/Page'
import { PageHeading } from '../components/PageHeading'
import { WorkGrid } from '../components/WorkCard'
import { getWorks } from '../data'

export function Works() {
  const works = getWorks()

  return (
    <Page title="つくったもの">
      <PageHeading title="つくったもの" lead="研究、ひとりでつくったもの、みんなでつくったもの。" />
      {/* 見出しの下をいもむしが這っている */}
      <HandLine className={css({ mt: '6' })}>
        <Animal
          name="mushi"
          width={120}
          motion="crawl"
          className={css({ position: 'absolute', right: { base: '4', md: '16' }, bottom: '4px', width: { base: '84px', md: '120px' }, height: 'auto' })}
        />
      </HandLine>
      <div className={css({ mt: { base: '10', md: '14' } })}>
        <WorkGrid works={works} />
      </div>
    </Page>
  )
}
