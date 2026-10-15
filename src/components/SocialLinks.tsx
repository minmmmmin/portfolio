import { css, cx } from 'styled-system/css'
import { getSocials } from '../data'
import { Icon } from './Icon'

type Props = {
  /** pill: 丸い枠つき（ヒーロー用） / plain: アイコンだけ（フッター用） */
  variant?: 'pill' | 'plain'
  className?: string
}

export function SocialLinks({ variant = 'pill', className }: Props) {
  return (
    <ul className={cx(css({ display: 'flex', flexWrap: 'wrap', gap: variant === 'pill' ? '3' : { base: '1.5', md: '5' } }), className)}>
      {getSocials().map((s) => (
        <li key={s.label}>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={variant === 'plain' && s.icon ? s.label : undefined}
            className={
              variant === 'pill'
                ? css({
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '2',
                    px: '4',
                    py: '1.5',
                    border: '1.5px solid token(colors.ink)',
                    borderRadius: 'full',
                    color: 'fg',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    bg: 'paper',
                    transition: 'background 0.15s',
                    _hover: { bg: 'yellow' },
                  })
                : css({ display: 'inline-flex', color: 'fg', p: '1', borderRadius: 'sm', _hover: { color: 'green.700' } })
            }
          >
            {s.icon && <Icon name={s.icon} size={variant === 'pill' ? 18 : 22} />}
            {/* アイコンが無いものは文字で出す */}
            {(variant === 'pill' || !s.icon) && (
              <span className={variant === 'plain' ? css({ fontSize: '0.9rem', lineHeight: '22px' }) : undefined}>
                {s.label}
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  )
}
