import classNames from 'classnames'

import styles from './Box.module.pcss'

type BoxProps = {
  children: React.ReactNode
  as?: 'li' | 'div'
  classProps?: string
  padding?: 's' | 'm' | 'l'
  borderRadius?: 's' | 'm' | 'l'
}

const Box = ({ children, as = 'li', classProps, padding = 'm', borderRadius = 'm' }: BoxProps) => {
  const Tag = as

  return (
    <Tag
      className={classNames(
        styles.box,
        padding && `-padding-${padding}`,
        borderRadius && `-border-radius-${borderRadius}`,
        classProps,
      )}
    >
      {children}
    </Tag>
  )
}

export default Box
