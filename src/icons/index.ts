// 使うアイコンだけ simple-icons から取り込む（全部 import するとバンドルが重くなる）。
// 増やすときは https://simpleicons.org で名前を調べて1行足す。
import {
  siCloudflare,
  siDaisyui,
  siGithub,
  siKubernetes,
  siNextdotjs,
  siNote,
  siPython,
  siQiita,
  siReact,
  siSpeakerdeck,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVite,
  siZenn,
  siX,
} from 'simple-icons'

export const icons = {
  github: siGithub,
  x: siX,
  speakerdeck: siSpeakerdeck,
  note: siNote,
  qiita: siQiita,
  zenn: siZenn,
  typescript: siTypescript,
  react: siReact,
  nextjs: siNextdotjs,
  vite: siVite,
  supabase: siSupabase,
  tailwindcss: siTailwindcss,
  daisyui: siDaisyui,
  python: siPython,
  cloudflare: siCloudflare,
  kubernetes: siKubernetes,
}

export type IconName = keyof typeof icons
