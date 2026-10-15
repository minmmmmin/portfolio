import { css } from 'styled-system/css'

// 横にくり返す草むらのタイル（幅 W）。両端の高さをそろえてあるのでつなぎ目が出ない。
// 塗り（閉じたパス）と、上のふちの線（開いたパス）を分けて、タイルの境目に縦線が出ないようにしている。
const W = 168
const H = 40

/** [根もとの x, 先っぽの x, 先っぽの高さ(下から)] を手でばらつかせた草 */
type Blade = [number, number, number]
const frontBlades: Blade[] = [
  [0, 9, 24], [14, 19, 31], [24, 33, 20], [38, 41, 33], [47, 55, 22],
  [60, 70, 29], [75, 78, 18], [83, 93, 34], [99, 104, 21], [109, 118, 28],
  [124, 127, 19], [132, 143, 32], [149, 155, 23], [160, 166, 27],
]
const backBlades: Blade[] = [
  [0, 6, 28], [11, 20, 36], [26, 30, 25], [35, 46, 38], [52, 58, 27],
  [63, 73, 35], [79, 84, 26], [90, 100, 39], [106, 111, 28], [117, 127, 36],
  [133, 137, 25], [142, 152, 37], [158, 164, 30],
]
const BASE = 12 // 谷の高さ

const edgePath = (blades: Blade[]) => {
  const y = (h: number) => H - h
  let d = `M0,${y(BASE)}`
  blades.forEach(([root, tip, h], i) => {
    const next = blades[i + 1]?.[0] ?? W
    // 根もと → 先っぽ → 次の根もと を、ふくらみのある曲線でつなぐ
    d += ` Q${root + (tip - root) * 0.3},${y(h * 0.75)} ${tip},${y(h)}`
    d += ` Q${tip + (next - tip) * 0.25},${y(h * 0.55)} ${next},${y(BASE)}`
  })
  return d
}

const tile = (blades: Blade[], fill: string) => {
  const edge = edgePath(blades)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<path d="${edge} L${W},${H} L0,${H} Z" fill="${fill}"/>
<path d="${edge}" fill="none" stroke="#242421" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>
</svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

// panda.config.ts の green.300 / green.500(frame) と同じ色
const backTile = tile(backBlades, '#BCCB9F')
const frontTile = tile(frontBlades, '#94AB6F')

const layer = css({
  position: 'absolute',
  insetX: '0',
  height: '40px',
  backgroundRepeat: 'repeat-x',
  backgroundPositionY: 'bottom',
  pointerEvents: 'none',
})

/** 草むら。back は動物のうしろ、front は動物の手前に置く */
export function Grass({ layer: which }: { layer: 'back' | 'front' }) {
  const back = which === 'back'
  return (
    <div
      aria-hidden="true"
      className={layer}
      style={{
        backgroundImage: back ? backTile : frontTile,
        // うしろの草は少しずらして、手前の草と山がかさならないように
        backgroundPositionX: back ? '61px' : '0',
        bottom: back ? '10px' : '0',
        zIndex: back ? 0 : 2,
      }}
    />
  )
}
