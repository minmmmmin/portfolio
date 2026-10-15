// サイトに載せるコンテンツの型。
// 将来 D1 や CMS から取ってくる場合も、この形に揃えて返せば UI はそのまま使える。
import type { AnimalName } from '../animals'
import type { IconName } from '../icons'

/** 未設定の URL は undefined のままにしておけば UI に出ない */
export type Links = {
  github?: string
  demo?: string
  article?: string
  slides?: string
  video?: string
}

/** 詳細ページの中身。書いた作品だけ /works/:slug のページができる */
export type WorkDetail = {
  /** 期間（自由記述） */
  period?: string
  team?: string
  role?: string
  sections: {
    heading: string
    /** 段落 */
    text?: string[]
    /** 箇条書き */
    list?: string[]
  }[]
}

export type WorkCategory = 'research' | 'personal' | 'team'

export type Work = {
  slug: string
  title: string
  description: string
  /** public/ からのパス（例: /works/coffee.webp）。無ければプレースホルダー表示 */
  thumbnail?: string
  category: WorkCategory
  /** 使用技術 */
  tags: string[]
  /** YYYY-MM または YYYY-MM-DD。不明なら省略 */
  publishedAt?: string
  /** ハッカソン名・授業名など、つくったきっかけ */
  context?: string
  /** 受賞（例: 優勝）。カードにマーカーで出る */
  award?: string
  /** Home に載せるか */
  featured?: boolean
  /** true の間はどこにも出さない */
  draft?: boolean
  links: Links
  /** 関連する登壇（talks.ts の slug）。詳細ページにカードで出る */
  talks?: string[]
  detail?: WorkDetail
}

export type Talk = {
  slug: string
  title: string
  /** イベント名（例: LoGeek 内 LT） */
  event: string
  /** YYYY-MM-DD */
  date: string
  kind: 'lt' | 'conference' | 'campus'
  /** スライドの表紙画像（public/talks/ に置く） */
  thumbnail?: string
  slidesUrl?: string
  eventUrl?: string
  /** true の間は一覧に出さない（日付やイベント名が未確定のもの） */
  draft?: boolean
}

export type Experience = {
  /** 期間（自由記述。例: 2026.07 / 活動中） */
  period: string
  /** 小さく出る種類（例: ハッカソン / 研究 / 大学院進学予定） */
  label: string
  /** 大きく出る名前（大学名・イベント名・団体名など） */
  title: string
  /** イベントページなど */
  url?: string
  description?: string
  /** 受賞（例: 優勝 / 優秀賞） */
  award?: string
  /** true なら仕事（インターンなど）として赤で出る */
  work?: boolean
  /** true の間は表示しない */
  draft?: boolean
}

export type SocialLink = {
  label: string
  /** 無ければ名前の文字で出る */
  icon?: IconName
  /** 未設定なら表示しない */
  url?: string
  handle?: string
}

export type Skill = {
  name: string
  /** src/icons にあるもの。無ければ名前だけ出る */
  icon?: IconName
}

export type SkillGroup = { label: string; items: Skill[] }

export type Certification = {
  name: string
  /** 取得年月 YYYY-MM */
  date: string
}

export type Profile = {
  name: string
  reading: string
  intro: string[]
  /** About の文章。**かこむ** とマーカー */
  about: string[]
  /** About のふきだしのセリフ */
  greeting: string
  /** SNS で使っているアイコンの動物 */
  avatars: { animal: AnimalName; where: string; url?: string }[]
  interests: string[]
  /** 技術。items が空のグループは表示しない */
  skills: SkillGroup[]
  hobbies: string[]
  /** 資格。表示時に新しい順に並ぶ */
  certifications: Certification[]
  socials: SocialLink[]
}
