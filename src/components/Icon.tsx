import { icons, type IconName } from '../icons'

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="currentColor">
      <path d={icons[name].path} />
    </svg>
  )
}
