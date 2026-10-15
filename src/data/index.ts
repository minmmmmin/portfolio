// ページはここ経由でデータを取る。
// 取得元を D1 や CMS に替えるときは、この関数の中身だけ差し替える。
import { experiences } from './experiences'
import { profile } from './profile'
import { talks } from './talks'
import { works } from './works'

export { profile }

/** 公開日の新しい順。日付が無いものは最後（書いた順のまま） */
export const getWorks = () =>
  works
    .filter((w) => !w.draft)
    .sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''))

export const getWork = (slug: string) => getWorks().find((w) => w.slug === slug)

export const getFeaturedWorks = (limit = 6) => getWorks().filter((w) => w.featured).slice(0, limit)

export const getTalks = () =>
  talks.filter((t) => !t.draft).sort((a, b) => b.date.localeCompare(a.date))

export const getTalksBySlugs = (slugs: string[] = []) =>
  getTalks().filter((t) => slugs.includes(t.slug))

export const getRecentTalks = (limit = 3) => getTalks().slice(0, limit)

export const getExperiences = () => experiences.filter((e) => !e.draft)

export const getCertifications = () =>
  [...profile.certifications].sort((a, b) => b.date.localeCompare(a.date))

export const getSocials = () => profile.socials.filter((s) => s.url)

export type Activity = { date: string; title: string; kind: 'talk' | 'work'; to: string }

/** 登壇と作品をまぜた「さいきん」の一覧 */
export const getRecentActivities = (limit = 5): Activity[] =>
  [
    ...getTalks().map((t) => ({ date: t.date, title: t.title, kind: 'talk' as const, to: '/talks' })),
    ...getWorks()
      .filter((w) => w.publishedAt)
      .map((w) => ({ date: w.publishedAt!, title: w.title, kind: 'work' as const, to: '/works' })),
  ]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit)
