import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
  exclude: [],
  outdir: 'styled-system',

  globalCss: {
    html: {
      bg: 'frame',
      color: 'fg',
      fontFamily: 'body',
      fontSize: '17px',
      lineHeight: '1.85',
      '@media (min-width: 768px)': { fontSize: '18px' },
      letterSpacing: '0.04em',
      WebkitTextSizeAdjust: '100%',
      textRendering: 'optimizeLegibility',
    },
    body: {
      bg: 'frame',
      overflowX: 'clip',
    },
    // 日本語の見出しを文節で折り返す（対応ブラウザのみ）
    'h1, h2, h3': { wordBreak: 'auto-phrase' },
    '::selection': { bg: 'yellow', color: 'ink' },
    ':focus-visible': {
      outline: '2.5px solid token(colors.ink)',
      outlineOffset: '3px',
      borderRadius: 'sm',
    },
    img: { maxWidth: '100%', height: 'auto' },
    '@media (prefers-reduced-motion: reduce)': {
      '*, *::before, *::after': {
        animationDuration: '0.01ms !important',
        animationIterationCount: '1 !important',
        transitionDuration: '0.01ms !important',
      },
    },
  },

  theme: {
    extend: {
      tokens: {
        colors: {
          green: {
            50: { value: '#F3F6EC' },
            100: { value: '#E8EDD9' },
            300: { value: '#BCCB9F' },
            500: { value: '#94AB6F' },
            700: { value: '#5A6D3E' },
          },
          ivory: { value: '#FBF6F1' },
          ink: { value: '#242421' },
          inkMuted: { value: '#62605A' },
          yellow: { value: '#FFD400' },
          // 仕事（インターンなど）の印
          red: { value: '#D9472B' },
          line: { value: '#DDD6CB' },
        },
        fonts: {
          body: { value: '"Yusei Magic", "Hiragino Maru Gothic ProN", "Hiragino Sans", sans-serif' },
          hand: { value: '"Hanazome", "Yusei Magic", "Hiragino Maru Gothic ProN", sans-serif' },
        },
        radii: {
          sm: { value: '4px' },
          md: { value: '10px' },
          lg: { value: '18px' },
        },
        sizes: {
          content: { value: '1200px' },
        },
      },
      semanticTokens: {
        colors: {
          frame: { value: '{colors.green.500}' },
          paper: { value: '{colors.ivory}' },
          fg: { value: '{colors.ink}' },
          fgMuted: { value: '{colors.inkMuted}' },
          accent: { value: '{colors.green.700}' },
          border: { value: '{colors.ink}' },
          rule: { value: '{colors.line}' },
        },
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '30%': { transform: 'rotate(-6deg)' },
          '60%': { transform: 'rotate(4deg)' },
        },
        crawl: {
          '0%, 100%': { transform: 'translateX(0) scaleY(1)' },
          '50%': { transform: 'translateX(10px) scaleY(0.94)' },
        },
      },
    },
  },
})
