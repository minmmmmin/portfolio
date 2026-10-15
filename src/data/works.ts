import type { Work } from '../types/content'

// 表示は publishedAt の新しい順（日付が無いものは最後）。
export const works: Work[] = [
  {
    slug: 'coffee-visualization',
    title: 'Coffee Visualization',
    description: '世界のコーヒー豆の味覚データを産地ごとに地図へ並べて、豆えらびを手伝う可視化システム。',
    thumbnail: '/works/coffee.webp',
    category: 'team',
    context: 'ゼミ',
    publishedAt: '2026-08', // 前期の分。いまも改善中
    tags: [], // TODO: 使用技術
    featured: true,
    links: {
      demo: 'https://suimin.netlify.app/',
    },
    talks: ['coffee-visualization', 'coffee-visualization-2'],
    detail: {
      sections: [
        {
          heading: 'どんなもの',
          text: [
            '世界のコーヒー豆の味覚データを、産地ごとに地図へ並べた可視化システムです。点が産地（国と地域）、点の色が味わいのタイプを表していて、色が同じ産地は味の傾向が似ています。横に伸びる帯は、産地が集中しているコーヒーベルト（南北25度にはさまれた範囲）です。',
            'コーヒー豆をえらぶときに「どこの豆がどんな味なのか」をなんとなくつかめるようにしたくてつくっています。',
            '公開しているのは前期の分で、いまも改善中です。',
          ],
        },
      ],
    },
  },
  {
    slug: 'nekoaruki',
    title: 'ねこあるき',
    description: '街で見かけた野良猫を投稿して、地図の上で共有できる Web アプリ。授業ではじめてチーム制作した、思い出の作品。',
    thumbnail: '/works/nekoaruki.webp',
    category: 'team',
    context: '大学の授業',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'Supabase', 'Google Maps API'],
    publishedAt: '2025-12',
    featured: true,
    links: {
      demo: 'https://nekoaruki.vercel.app',
      github: 'https://github.com/minmmmmin/nekoaruki',
      article: 'https://esa-pages.io/p/sharing/8704/posts/7841/278a1d96613413bd375f.html',
      video: 'https://youtu.be/l-bHNJdEPr8',
    },
    detail: {
      period: '2025.10 – 2025.12（3年後期）',
      team: 'ゼミの同期 4人',
      role: '企画 / チーム開発のリード / フロントエンド',
      sections: [
        {
          heading: 'どんなもの',
          text: [
            '散歩中にたまたま出会った猫を記録して、地域のみんなで共有できる Web アプリです。',
            '「どこで・いつ・どんな猫を見かけたか」を地図と結びつけて残すことで、猫スポットや時間帯の傾向がなんとなく見えてくる。「猫を探して歩く楽しさ」や「街を見る目が変わること」をつくりたくて企画しました。',
          ],
        },
        {
          heading: 'できること',
          list: [
            'Google / GitHub アカウントでログイン',
            '地図で場所を指定して、猫の写真とコメントを投稿',
            '地図のピンやタイムラインで投稿を見る',
            '投稿にいいね・コメント',
          ],
        },
        {
          heading: 'わたしがやったこと',
          text: [
            '企画を考えて、チーム開発のリードとフロントエンドを担当しました。コミット数はチームでいちばん多い 104（全体 217）。',
          ],
        },
        {
          heading: '工夫したところ',
          list: [
            '画像をアップロードするときに圧縮して、通信量を減らした',
            'Supabase の Storage と DB の整合性がくずれないように設計した',
            'スマホで使う前提の UI / レイアウト',
            '地図・タイムライン・分割ビューを切り替えて見やすくした',
          ],
        },
        {
          heading: 'ふりかえり',
          text: [
            'Supabase の RLS や認証まわりは試行錯誤の連続で、実践的な Web アプリ開発をたくさん学べました。',
            '技術だけじゃなく「街を歩く体験そのもの」をデザインすることを意識した作品です。身近なテーマでも新しい体験はつくれるんだな、と実感しました。',
          ],
        },
      ],
    },
  },
  {
    slug: 'chromalab',
    title: 'Chromalab',
    description: '色彩検定2級に2回落ちたのでつくった、配色を勉強できるカラーパレット作成アプリ。',
    category: 'personal',
    context: '大学の授業',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    publishedAt: '2026-01',
    featured: true,
    links: {
      demo: 'https://color-five-kappa.vercel.app/',
      github: 'https://github.com/minmmmmin/color',
    },
    talks: ['color'],
    detail: {
      sections: [
        {
          heading: 'つくったきっかけ',
          text: [
            '色彩検定2級に2回落ちたので、配色を勉強できるサイトをつくりました。',
            'そして 2026年7月、3回目でぶじ2級に合格しました。',
          ],
        },
        {
          heading: 'できること',
          list: [
            '色相ベース・トーンベースの配色をつくる',
            '色相環にもとづいた2〜6色の配色（補色、トライアド、テトラードなど）をつくる',
            'つくったパレットを保存して、カテゴリで絞り込む',
            'アカウントごとにデータを管理（Supabase Auth）',
          ],
        },
      ],
    },
  },
  {
    slug: 'stamp-rally',
    title: '文化祭スタンプラリー',
    description: 'QR でスタンプを集めながら模擬店をまわれる文化祭アプリ。混雑状況も見られる。',
    thumbnail: '/works/stamprally.webp',
    category: 'team',
    context: 'Progate ハッカソン',
    award: '優秀賞',
    tags: ['TypeScript'],
    publishedAt: '2026-05',
    featured: true,
    links: {
      demo: 'https://progate-hackathon-202605.vercel.app',
      github: 'https://github.com/minmmmmin/progate-hackathon-202605',
    },
    detail: {
      sections: [
        {
          heading: 'どんなもの',
          text: [
            '来場者が模擬店や展示をまわりながら、スマホでスタンプを集められる文化祭アプリです。運営側はスポットや混雑状況を管理できます。',
            '「どこ行こう？」の悩みをへらして、会場をまわるのを楽しくする、混雑のかたよりをへらす、が目的です。',
          ],
        },
        {
          heading: 'できること',
          list: [
            'ブースの QR を読みとってスタンプをゲット',
            '集めたスタンプと達成状況を見る',
            '混雑状況を見て、空いているブースのおすすめを出す',
            '運営：スポットや QR コード、混雑状況の管理',
          ],
        },
      ],
    },
  },
  {
    slug: 'minna-no-gohan',
    title: 'みんなのごはん',
    description: 'みんなの「今日なに食べたい」を生成 AI が整理して、全員が納得しやすいお店を提案してくれる。',
    thumbnail: '/works/suimin-gohan.webp',
    category: 'team',
    context: 'HACKBASE 日本大学',
    award: '優勝',
    tags: ['React', 'Vite', 'Express', 'Gemini API', 'ホットペッパー API'],
    publishedAt: '2026-07',
    featured: true,
    links: {
      demo: 'https://hackbase-nihon-university-suimin-fr.vercel.app',
      github: 'https://github.com/minmmmmin/HACKBASE-Nihon-University-suimin',
    },
    detail: {
      sections: [
        {
          heading: 'どんなもの',
          text: [
            'みんなが「今日なに食べたい？」を自由に入力すると、生成 AI（Gemini API）が条件を整理して、ホットペッパーグルメ API のお店の中から全員が納得しやすいお店を最大30件提案してくれる Web アプリです。',
          ],
        },
        {
          heading: 'できること',
          list: [
            '1台でみんなの希望を入力するモード',
            'ルームをつくって、それぞれのスマホから希望を集めるモード',
            'AI が整理した条件でお店をスコアリングして提案',
          ],
        },
      ],
    },
  },
  {
    slug: 'ahoanimal',
    title: 'あほっこ動物',
    description: 'あほっこ動物たちのしょうかい、ずかん、グッズをまとめたサイト。',
    thumbnail: '/works/ahoanimal.webp',
    category: 'personal',
    context: '大学の授業',
    tags: ['HTML', 'CSS', 'JavaScript'],
    publishedAt: '2024-12',
    featured: true,
    links: {
      demo: 'https://ahoanimal.jp',
      github: 'https://github.com/minmmmmin/ahoanimal',
    },
    detail: {
      sections: [
        {
          heading: 'どんなもの',
          text: [
            'このサイトにもいる、あほっこ動物たちのサイトです。しょうかい、ずかん、よくある質問、グッズなどをまとめています。',
            '大学の授業でこのサイトをつくったのがきっかけで、ものづくりのおもしろさにハマりました。',
          ],
        },
      ],
    },
  },
  {
    slug: 'webnn-demo',
    draft: true, // いまは載せない
    title: 'WebNN Demo',
    description: 'WebNN でブラウザの中だけで AI を動かしてみたデモ。',
    category: 'personal',
    tags: ['WebNN', 'TypeScript'],
    publishedAt: '2026-08',
    links: {
      github: 'https://github.com/minmmmmin/Webnn',
    },
    talks: ['webnn'],
    detail: {
      sections: [
        {
          heading: 'どんなもの',
          text: ['ブラウザから機械学習を動かすための API、WebNN をさわってみたデモです。サーバーを使わず、ブラウザの中だけで AI を動かしています。'],
        },
      ],
    },
  },
  {
    slug: 'mojivisual',
    title: 'mojivisual',
    description: 'フォント選びをもっと直感的で楽しくするためのツール。Google Fonts のフォントを1枚の図に並べて、見比べながら選べる。',
    thumbnail: '/works/mojivisual.webp',
    category: 'personal',
    context: 'ゼミ',
    tags: ['JavaScript', 'Python', 'UMAP', 'Google Fonts API'],
    publishedAt: '2025-07',
    links: {
      demo: 'https://mojivisual.netlify.app/',
      github: 'https://github.com/minmmmmin/font',
    },
    detail: {
      sections: [
        {
          heading: 'どんなもの',
          text: [
            'フォント選びをもっと直感的で楽しくするためのツールです。デザイン制作や資料づくりのときのフォント選びに。',
            'Google Fonts のフォントを1枚の図にちらばらせて、sans-serif / serif / handwriting / monospace / display のカテゴリごとに色分けしています。表示する文字や件数を変えて、見比べながら気になるフォントを探せます。',
          ],
        },
        {
          heading: 'しくみ',
          text: [
            'もともとあったフォント画像の200次元のベクトルデータを、UMAP で2次元に落としています。見た目が似ているフォントほど近くに並びます。フォントの情報は Google Fonts API から取っています。',
          ],
        },
        {
          heading: 'つくったきっかけ',
          text: ['3年前期のゼミでの個人制作です。2025年9月のオープンキャンパスで展示しました。'],
        },
      ],
    },
  },
  {
    slug: 'oryouri',
    title: '今日のおりょうり',
    description: 'その日のごはんを記録するアプリ。Tamagui をさわってみるためにつくった。',
    category: 'personal',
    tags: ['Tamagui', 'React Native', 'TypeScript'],
    publishedAt: '2026-10',
    links: {
      github: 'https://github.com/minmmmmin/tamagui',
    },
    talks: ['tamagui'],
    detail: {
      sections: [
        {
          heading: 'どんなもの',
          text: [
            'その日のごはん（朝・昼・晩）を写真つきで記録するアプリです。',
            'ずっと気になっていた Tamagui（React Native と Web で同じコードが書けるスタイリングライブラリ）をさわってみるのが目的です。',
          ],
        },
        {
          heading: 'さわってみて',
          list: [
            'レスポンシブ対応が楽',
            'tamagui.config.ts で、ウェブもアプリも一気に変えられるところがたくさんある',
            'React に近い書き方でアプリ開発をはじめられるので、Web をやってきた人でも入りやすい',
          ],
        },
      ],
    },
  },
  {
    slug: 'animal-dash',
    draft: true, // いまは載せない
    title: 'Animal Dash',
    description: '紙に描いた動物がゲームに入ってきて走る、参加型のレースゲーム。',
    category: 'team', // TODO: カテゴリ・使用技術・リンク
    tags: [],
    links: {},
  },
]
