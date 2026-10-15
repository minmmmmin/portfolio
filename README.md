# min portfolio

min の個人ポートフォリオ。Vite + React + TypeScript + Panda CSS + React Router で作った SPA を、Cloudflare Workers Static Assets で配信しています。

## セットアップ

```sh
npm install      # prepare で panda codegen も走る
npm run dev      # http://localhost:5173
npm run build    # 型チェック + 本番ビルド（dist/）
npm run preview  # ビルド結果を確認
npm run cf:dev   # Cloudflare と同じ環境（wrangler dev）で確認
```

Node.js 22 以上を推奨。

## ディレクトリ

```
src/
  data/         コンテンツ（ここだけ触れば中身が変わる）
  types/        コンテンツの型
  components/   Layout / Header / Footer / PageHeading / WorkCard / TalkCard / Animal など
  pages/        Home / About / Works / Talks / Experience / NotFound
  animals/      動物画像の一覧
public/
  animals/      動物画像（webp）
  works/        作品のサムネイル
design/animals/ 動物の元画像（png）
panda.config.ts デザイントークン（色・フォント・角丸・アニメーション）
wrangler.jsonc  Cloudflare の設定
```

## コンテンツの追加・編集

URL や日付が決まっていない項目は空（`undefined`）のままで OK。画面には出ません。

### 作品を追加する — `src/data/works.ts`

```ts
{
  slug: 'my-app',                // 英数字の一意な ID
  title: 'My App',
  description: 'ひとことで説明。',
  thumbnail: '/works/my-app.webp', // public/works/ に置く。省略するとタイトル入りの仮サムネ
  category: 'personal',          // 'research' | 'personal' | 'team'（カードに「研究 / 個人 / チーム」と出る）
  context: 'Progate ハッカソン', // 任意。つくったきっかけ
  tags: ['React', 'D3.js'],
  publishedAt: '2026-10',        // 任意
  featured: true,                // Home に出す（先頭から最大3件）
  links: { github: '...', demo: '...', article: '...' },
},
```

表示は `publishedAt` の新しい順です（日付が無いものは最後）。`draft: true` を付けると、一覧にも詳細ページにも出なくなります。

#### 詳細ページをつける

どの作品も `/works/<slug>` に詳細ページがあり、カード全体がそこへのリンクになります。
`detail` を書くと本文が入ります（書かなければカードの情報＋「まだ書いていません」）。Demo / GitHub などのリンクは詳細ページにだけ出ます。

```ts
detail: {
  period: '2025.10 – 2025.12',
  team: 'ゼミの同期 4人',
  role: '企画 / リード / フロントエンド',
  sections: [
    { heading: 'どんなもの', text: ['段落1', '段落2'] },
    { heading: '工夫したところ', list: ['箇条書き1', '箇条書き2'] },
  ],
},
```

`talks: ['登壇のslug']` を書くと、詳細ページに「LT でもはなしました」として登壇カードが出ます。
`links.video` に YouTube の URL があると、ページの最後に動画が埋め込まれます。

### 登壇を追加する — `src/data/talks.ts`

```ts
{
  slug: 'my-talk',
  title: '発表タイトル',
  event: 'イベント名',
  date: '2026-11-01',            // YYYY-MM-DD
  kind: 'lt',                    // 'lt' | 'conference' | 'campus'
  thumbnail: '/talks/my-talk.webp', // スライドの表紙。省略するとタイトル入りの仮サムネ
  slidesUrl: 'https://...',      // 資料（Speaker Deck / Google Slides など）
  eventUrl: 'https://...',       // 任意
},
```

日付の新しい順に自動で並びます。`draft: true` を付けると一覧に出ません（情報がそろうまでの置き場）。

### 経歴 — `src/data/experiences.ts`

上から新しい順に書きます。`{ period, label, title, description, award, url }` で、`award: '優勝'` を付けると黄色いラベルが出ます。
`work: true` を付けると仕事（インターンなど）として赤い点・赤いラベルで出ます。

### プロフィール・SNS — `src/data/profile.ts`

- じこしょうかい文は `about`（`**ことば**` で黄色マーカー）。ふきだしのセリフは `greeting`、SNS アイコンの動物は `avatars`。
- 資格は `certifications` に `{ name, date: 'YYYY-MM' }` で追加（新しい順に自動で並ぶ）。
- SNS は `socials` に `{ label, icon, url, handle }` で追加。
- 技術は `skills` に「よく使う / 勉強中 / やってみたい」のグループで書く。`items` が空のグループは表示されません。
  `{ name: 'Astro', icon: 'astro' }` のように書き、アイコンが無いものは `icon` を省略すると名前だけ出ます。
- アイコンは `src/icons/index.ts` に simple-icons から1行足して使います（名前は https://simpleicons.org で検索）。

### データの取得元を変えたいとき

ページは `src/data/index.ts` の関数（`getWorks` / `getTalks` など）からしかデータを読んでいません。
D1 や CMS に移すときはこのファイルの中身を差し替えます。

## あほっこ動物の差し替え

- 画像は `public/animals/<名前>.webp`。同じ名前で上書きすれば差し替わります。
- 縦横比が変わったら `src/animals/index.ts` の `w` / `h` も直してください。
- 新しい子を追加するときは、画像を置いて `src/animals/index.ts` に1行足し、`<Animal name="..." width={120} />` で使います。
- PNG から WebP への変換例（Pillow）:
  `python3 -c "from PIL import Image; im=Image.open('in.png'); im=im.crop(im.getchannel('A').getbbox()); im.thumbnail((320,320)); im.save('out.webp', quality=88)"`
- アニメーションは `motion="bob" | "wobble" | "crawl"`。OS の「視差効果を減らす」設定がオンなら止まります。

| 場所 | 動物 |
| --- | --- |
| Home | usagi |
| About | mogumogurisu |
| Works | mushi |
| Talks | koke |
| Experience | hebi |
| Footer | kumasan / piyo / tora / pig / mouse / meee |
| 404 | tashikani |

## デプロイ（Cloudflare Workers）

`wrangler.jsonc` で `dist/` を静的アセットとして配信し、`not_found_handling: "single-page-application"` で `/works` などへの直接アクセスでも `index.html` を返します。サーバー処理はありません。

### GitHub 連携で自動デプロイ

1. このリポジトリを GitHub に push
2. Cloudflare ダッシュボード → Workers & Pages → Create → Import a repository
3. 設定
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
4. 以降は main に push するたびに自動でデプロイされます（PR ごとにプレビューも作られます）

### 手元からデプロイ

```sh
npx wrangler login
npm run deploy
```

## フォント

- 全体: [Yusei Magic](https://fonts.google.com/specimen/Yusei+Magic)（Google Fonts）
- About のふきだし: [はなぞめフォント](https://www.asterism-m.com/font/hanazomefont/)（Asterism / さつやこ さん）
  - Web フォント利用 OK。ただしフォントデータの改変は禁止なので、サブセット化はせず TTF → WOFF2 の形式変換だけしています（`public/fonts/hanazome.woff2`、約3.6MB）。
  - 元の zip と readme は `design/fonts/hanazome/` にあります。

## OGP（リンクをシェアしたときのカード）

- 画像: `public/ogp.png`（1200×630）。元は `design/ogp/ogp.html`
- タグ: `index.html`。URL は `.env` の `VITE_SITE_URL`（公開先が決まったら書きかえる）
- SPA なので、どのページをシェアしても同じカードになります
- 画像を作り直すとき:

  ```sh
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars \
    --window-size=1200,630 --virtual-time-budget=5000 \
    --screenshot=public/ogp.png design/ogp/ogp.html
  ```
