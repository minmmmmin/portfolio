import type { ReactNode } from 'react'
import { css, cx } from 'styled-system/css'

// 手描きっぽくゆれる横線。両端の高さをそろえたタイル（幅 240）を横にくり返す。
const path = 'M0,5 C22,3.6 41,6.2 63,4.8 S104,3.4 128,5.4 S171,6.3 196,4.4 S226,4.2 240,5'
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="10" viewBox="0 0 240 10"><path d="${path}" fill="none" stroke="#242421" stroke-width="1.8" stroke-linecap="round"/></svg>`
const tile = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`

/** 見出しの下などに引く線。children は線の上に乗せるもの（動物など） */
export function HandLine({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <div
      className={cx(css({ position: 'relative', height: '10px', backgroundRepeat: 'repeat-x', backgroundPosition: 'left center' }), className)}
      style={{ backgroundImage: tile }}
    >
      {children}
    </div>
  )
}
