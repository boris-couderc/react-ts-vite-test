import classNames from 'classnames'

import styles from './Box.module.pcss'

type BoxProps = {
  children: React.ReactNode
  as?: 'li' | 'div'
  classProps?: string
}

const Box = ({ children, as = 'li', classProps }: BoxProps) => {
  const Tag = as

  return <Tag className={classNames(styles.box, classProps)}>{children}</Tag>
}

export default Box
