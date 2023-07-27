import { Wrapper } from '~/layouts'

import styles from './Bar.module.pcss'

type BarProps = {
  children: React.ReactNode
}

const Nav = ({ children }: BarProps) => {
  return (
    <nav className={styles.bar}>
      <Wrapper fixedVerticalPadding>{children}</Wrapper>
    </nav>
  )
}

export default Nav
