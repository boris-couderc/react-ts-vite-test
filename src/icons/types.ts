import { Color } from '~/types'

export type IconProps = {
  color?: Color
  title?: string
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'
  classProps?: string
  ariaHidden?: boolean
}

export interface IconWrapperProps extends IconProps {
  symbol: string
}
