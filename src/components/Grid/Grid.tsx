import classNames from 'classnames'

import styles from './Grid.module.pcss'

type GridProps = {
  children: React.ReactNode
  as?: 'ul' | 'div'
  classProps?: string
}

const Grid = ({ children, as = 'ul', classProps }: GridProps) => {
  const Tag = as
  return <Tag className={classNames(styles.grid, classProps)}>{children}</Tag>
}

export default Grid
