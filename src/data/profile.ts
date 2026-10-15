import type { Profile } from '../types/content'

export const profile: Profile = {
  name: 'min',
  reading: 'みん',
  intro: [
    'よくおえかきします。元気です。',
  ],
  // About のじこしょうかい文。**かこむ** と黄色いマーカーがつく
  about: [
    'こんにちは、**min（みん）**です。',
    '日本大学文理学部情報科学科の4年生です。今年度は日本大学文理学部情報研究会LoGeek 代表をしています。',
    '「**あほっこ動物**」という、あほな動物たちを描いています。',
    '大学の授業で、あほっこ動物のWebサイトを作ったことがきっかけで、ものづくりのおもしろさにハマりました。',
    'それからは、思いついたものを形にするのが楽しくていろいろなものに手を出しています。',
    '作ったものをLTでしゃべるのも好きです。',
    'ダンスとお絵描きとスペイン語もすき。すきないろは**緑**です。',
    'なんでもします。元気です。',
  ],
  greeting: 'なかよくしてください',
  avatars: [
    { animal: 'mogumogurisu', where: 'Discord' },
    { animal: 'usagi', where: 'X', url: 'https://x.com/carrot__pyon_' },
  ],
  interests: ['Web フロントエンド', 'データ可視化'],
  skills: [
    {
      label: 'よく使う',
      items: [
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'React', icon: 'react' },
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'Vite', icon: 'vite' },
        { name: 'Supabase', icon: 'supabase' },
        { name: 'Tailwind CSS', icon: 'tailwindcss' },
        { name: 'DaisyUI', icon: 'daisyui' },
        { name: 'Python', icon: 'python' },
      ],
    },
    {
      // TODO: 確認。最近の LT・作品から拾ったもの
      label: '勉強中',
      items: [
        { name: 'Tamagui' },
        { name: 'React Native', icon: 'react' },
      ],
    },
    {
      label: 'やってみたい',
      items: [
        { name: 'Cloudflare', icon: 'cloudflare' },
        { name: 'Kubernetes', icon: 'kubernetes' },
      ],
    },
  ],
  hobbies: ['ダンス', 'お絵描き', 'スペイン語'],
  certifications: [
    { name: '基本情報技術者試験', date: '2025-01' },
    { name: '色彩検定 3級', date: '2025-07' },
    { name: '色彩検定 2級', date: '2026-07' },
  ],
  socials: [
    { label: 'GitHub', icon: 'github', url: 'https://github.com/minmmmmin', handle: 'minmmmmin' },
    { label: 'X', icon: 'x', url: 'https://x.com/carrot__pyon_', handle: '@carrot__pyon_' },
    { label: 'Speaker Deck', icon: 'speakerdeck', url: 'https://speakerdeck.com/minmmmin', handle: 'minmmmin' },
    { label: 'AtCoder', url: 'https://atcoder.jp/users/minmmmin', handle: 'AtCoder' },
    { label: 'note', icon: 'note', url: 'https://note.com/min825', handle: 'min825' },
    { label: 'Qiita', icon: 'qiita', url: 'https://qiita.com/minmmmin', handle: 'minmmmin' },
    { label: 'Zenn', icon: 'zenn', url: 'https://zenn.dev/minmmmmin', handle: 'minmmmmin' },
  ],
}
