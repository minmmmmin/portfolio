import { css } from 'styled-system/css'
import { profile } from '../data'
import { Icon } from './Icon'

/** よく使う / 勉強中 / やってみたい。中身が空のグループは出さない */
export function Skills({ compact }: { compact?: boolean }) {
  const groups = profile.skills.filter((g) => g.items.length > 0)
  return (
    <div className={css({ display: 'grid', gap: compact ? '4' : '6' })}>
      {groups.map((g) => (
        <div
          key={g.label}
          className={css({
            display: 'grid',
            gridTemplateColumns: { base: '1fr', sm: compact ? '6.5rem 1fr' : '9rem 1fr' },
            columnGap: compact ? '4' : '6',
            rowGap: '2',
            alignItems: 'start',
          })}
        >
          <h3 className={css({ fontWeight: 'normal', color: 'fgMuted', fontSize: '0.9rem', pt: '1.5' })}>{g.label}</h3>
          <ul className={css({ display: 'flex', flexWrap: 'wrap', gap: '2' })}>
            {g.items.map((s) => (
              <li
                key={s.name}
                className={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1.5',
                  px: '3',
                  py: '1',
                  border: '1.5px solid token(colors.ink)',
                  borderRadius: 'full',
                  bg: 'paper',
                  fontSize: '0.85rem',
                  lineHeight: '1.5',
                })}
              >
                {s.icon && <Icon name={s.icon} size={15} />}
                {s.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
