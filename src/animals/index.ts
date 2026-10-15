// あほっこ動物の一覧。画像は public/animals/<name>.webp。
// 絵を描き直したら同じ名前で上書きするだけで差し替わる（縦横比が変わったら w / h も直す）。
export const animals = {
  usagi: { w: 320, h: 266 },
  piyo: { w: 320, h: 285 },
  mogumogurisu: { w: 320, h: 252 },
  mushi: { w: 320, h: 127 },
  koke: { w: 306, h: 320 },
  hebi: { w: 320, h: 243 },
  tashikani: { w: 320, h: 197 },
  kumasan: { w: 320, h: 277 },
  tora: { w: 320, h: 259 },
  pig: { w: 320, h: 320 },
  mouse: { w: 320, h: 226 },
  meee: { w: 320, h: 243 },
  // 今は使っていない子たち
  inu: { w: 320, h: 221 },
  inoshishi: { w: 320, h: 269 },
  uma: { w: 312, h: 320 },
  usi: { w: 320, h: 286 },
  kirin: { w: 318, h: 320 },
  koara: { w: 320, h: 206 },
  tanuki: { w: 320, h: 239 },
  tatu: { w: 282, h: 320 },
  hum: { w: 320, h: 257 },
  monkey: { w: 320, h: 224 },
} as const

export type AnimalName = keyof typeof animals
