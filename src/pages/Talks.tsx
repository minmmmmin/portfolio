import { css } from 'styled-system/css'
import { Animal } from '../components/Animal'
import { Page } from '../components/Page'
import { PageHeading } from '../components/PageHeading'
import { SocialLinks } from '../components/SocialLinks'
import { TalkGrid } from '../components/TalkCard'
import { getTalks } from '../data'

export function Talks() {
  const talks = getTalks()
  return (
    <Page title="はなしたこと">
      <PageHeading
        title="はなしたこと"
        lead={`LT とか、発表とか。新しい順に ${talks.length} 件。`}
        aside={
          <Animal
            name="koke"
            width={120}
            motion="wobble"
            hideOnMobile
            className={css({ width: '120px', height: 'auto', mr: '6' })}
          />
        }
      />
      <div className={css({ mt: { base: '10', md: '14' } })}>
        <TalkGrid talks={talks} />
      </div>
      <p className={css({ mt: '16', color: 'fgMuted', fontSize: '0.95rem' })}>スライドは Speaker Deck にもまとめています。</p>
      <SocialLinks className={css({ mt: '3' })} />
    </Page>
  )
}
