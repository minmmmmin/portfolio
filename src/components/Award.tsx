import { css } from 'styled-system/css'

/** 「優勝」「優秀賞」などの受賞ラベル */
export function Award({ children }: { children: string }) {
  return (
    <span
      className={css({
        display: 'inline-block',
        px: '2',
        py: '0.5',
        bg: 'yellow',
        color: 'ink',
        border: '1.5px solid token(colors.ink)',
        borderRadius: 'sm',
        fontSize: '0.8rem',
        lineHeight: '1.4',
        whiteSpace: 'nowrap',
      })}
    >
      {children}
    </span>
  )
}
