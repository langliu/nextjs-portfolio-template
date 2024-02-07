import type { TailwindColor } from '$/utils/types/tailwind'
import { MAP_COLOR_VARIANT_TO_BG } from '$/utils/mapVariants'

type Props = {
  position: 'bottom' | 'top'
  color: TailwindColor
}

export default function BlurCircle({ position, color }: Props) {
  return (
    <div
      className={`fixed z-0 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full ${MAP_COLOR_VARIANT_TO_BG[color]} blur-[150px] md:blur-[350px] opacity-50 ${position === 'top' ? 'left-0 top-0' : ''} ${position === 'bottom' ? 'right-0 bottom-0' : ''}`}
    ></div>
  )
}
