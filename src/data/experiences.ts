import type { Experience } from '../types/content'

// 上から新しい順（はじまった順）に書く。work: true は仕事として赤で出る。
export const experiences: Experience[] = [
  {
    period: '2027.04',
    label: '大学院進学予定',
    title: '日本大学大学院総合基礎科学研究科',
    description: '情報科学分野で研究を続ける予定です。',
    draft: true, // いまは載せない
  },
  {
    period: '2026.09',
    label: 'ハッカソン',
    title: 'メルカリ AIエージェントハッカソン',
    description: 'AIエージェントをテーマとしたハッカソンに参加しました。',
  },
  {
    period: '2026.07',
    label: '学内ハッカソン',
    title: 'HACKBASE 日本大学',
    url: 'https://tech-boost-hackathon.my.canva.site/hackbase-nihon-university',
    award: '優勝',
    description: 'チームで「みんなのごはん」を開発して、優勝しました。',
  },
  {
    period: '2026.05',
    label: 'ハッカソン',
    title: 'Progate ハッカソン',
    url: 'https://progate.connpass.com/event/390889/',
    award: '優秀賞',
    description: 'チームで「文化祭スタンプラリー」を開発して、優秀賞を受賞しました。',
  },
  {
    period: '2026.04 – いま', // TODO: 確認（「今年度は代表」より）
    label: 'コミュニティ',
    title: '日本大学文理学部情報研究会 LoGeek / 代表',
    description: 'プログラミングサークルの代表として、AtCoder会やLT会、学内ハッカソンなどの企画・運営に取り組んでいます。',
  },
  {
    period: '2025.08 – いま',
    label: '長期インターン',
    title: '株式会社unerry',
    description: 'React、Next.js、TypeScriptなどを用いたWebアプリケーション開発に携わっています。',
    work: true,
  },
  {
    period: '2025.08',
    label: 'サマーインターン（5日間）',
    title: '株式会社いい生活',
    work: true,
  },
  {
    period: '2025.04',
    label: '研究',
    title: '日本大学文理学部情報科学科 尾上研究室',
    description:
      '大学3年次に研究室へ配属。情報可視化を中心に研究しています。現在は、コーヒー豆の選択を支援する可視化システムの開発に取り組んでいます。',
  },
  {
    period: '2023.04',
    label: '学歴',
    title: '日本大学文理学部情報科学科',
    description: '入学。2027年3月卒業見込み。',
  },
]
