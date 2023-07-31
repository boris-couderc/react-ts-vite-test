import classNames from 'classnames'
import icons from './icons.svg'
import styles from './Icon.module.css'

import { IconWrapperProps } from './types'

const Icon = ({ symbol, color, size, classProps }: IconWrapperProps) => {
  return (
    <svg viewBox='0 0 24 24' className={classNames(styles.icon, color && `-${color}`, size && `-${size}`, classProps)}>
      {symbol && <use href={`${icons}#${symbol}`} />}
    </svg>
  )
}

export default Icon
