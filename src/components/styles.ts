import { css } from 'styled-system/css'

/** 普通の下線リンク。ホバーで黄色いマーカーが引かれる */
export const textLink = css({
  color: 'fg',
  textDecoration: 'underline',
  textDecorationThickness: '1.5px',
  textUnderlineOffset: '0.25em',
  textDecorationSkipInk: 'none',
  transition: 'text-decoration-color 0.15s, text-decoration-thickness 0.15s, text-underline-offset 0.15s',
  _hover: {
    textDecorationColor: 'yellow',
    textDecorationThickness: '0.45em',
    textUnderlineOffset: '-0.2em',
  },
})

export const container = css({
  width: '100%',
  maxWidth: 'content',
  mx: 'auto',
  px: { base: '5', md: '10' },
})
