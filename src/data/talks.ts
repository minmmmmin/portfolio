import type { Talk } from '../types/content'

// 順番は気にしなくて OK（表示時に日付の新しい順に並べる）。
export const talks: Talk[] = [
  {
    slug: 'tamagui',
    title: 'Tamaguiさわってみた',
    event: 'LoGeek 内 LT',
    date: '2026-10-02',
    kind: 'lt',
    slidesUrl: undefined, // TODO: 資料を上げたら URL と thumbnail
  },
  {
    slug: 'coffee-visualization-2',
    title: 'コーヒー豆の可視化で迷走しまくった（ている）話 〜続編〜',
    event: '第59回 情報科学若手の会 LT',
    date: '2026-09-05',
    kind: 'lt',
    thumbnail: '/talks/coffee-2.webp',
    slidesUrl: 'https://speakerdeck.com/minmmmin/kohi-mame-no-kashika-de-meisou-shi-maku-te-iru-hanashi-zokuhen',
  },
  {
    slug: 'webnn',
    title: 'WebNNでブラウザAIを動かしてみた',
    event: 'Think ! FrontEnd by DMM #10',
    date: '2026-08-28',
    kind: 'lt',
    thumbnail: '/talks/webnn.webp',
    slidesUrl: 'https://speakerdeck.com/minmmmin/webnn-de-ai-o-ugokashi-te-mita',
    eventUrl: 'https://dmm.connpass.com/event/397656/',
  },
  {
    slug: 'coffee-visualization',
    title: 'コーヒー豆の可視化で迷走しまくった（ている）話',
    event: '新卒N年目の勉強会&交流会！「Tech Talk !!!!」',
    date: '2026-08-06',
    kind: 'lt',
    thumbnail: '/talks/coffee-1.webp',
    slidesUrl: 'https://speakerdeck.com/minmmmin/kohidou-noke-shi-hua-de-mi-zou-simakututa-teiru-hua',
    eventUrl: 'https://fresh-engineers.connpass.com/event/399536/',
  },
  {
    slug: 'color',
    title: '色彩検定に受かりたい',
    event: '初登壇大歓迎！学生エンジニアの個人開発LT',
    date: '2026-05-20',
    kind: 'lt',
    thumbnail: '/talks/color.webp',
    slidesUrl: 'https://speakerdeck.com/minmmmin/se-cai-jian-ding-nishou-karitai',
    eventUrl: 'https://findy.connpass.com/event/390505/',
  },
]
