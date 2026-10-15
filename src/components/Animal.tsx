import { css, cx } from 'styled-system/css'
import { animals, type AnimalName } from '../animals'

type Motion = 'none' | 'bob' | 'wobble' | 'crawl'

type Props = {
  name: AnimalName
  /** 表示幅(px) */
  width: number
  motion?: Motion
  /** 小さい画面では隠す */
  hideOnMobile?: boolean
  className?: string
}

const motionStyles: Record<Motion, string> = {
  none: '',
  bob: css({ animation: 'bob 3.2s ease-in-out infinite' }),
  wobble: css({ _hover: { animation: 'wobble 0.6s ease-in-out' } }),
  crawl: css({ animation: 'crawl 4s ease-in-out infinite' }),
}

// 装飾なのでスクリーンリーダーには読ませない
export function Animal({ name, width, motion = 'none', hideOnMobile, className }: Props) {
  const { w, h } = animals[name]
  return (
    <img
      src={`/animals/${name}.webp`}
      alt=""
      aria-hidden="true"
      width={width}
      height={Math.round((width * h) / w)}
      loading="lazy"
      decoding="async"
      draggable={false}
      className={cx(
        css({ display: 'block', userSelect: 'none', flexShrink: 0 }),
        hideOnMobile && css({ display: { base: 'none', md: 'block' } }),
        motionStyles[motion],
        className,
      )}
    />
  )
}
