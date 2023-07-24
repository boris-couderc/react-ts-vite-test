import { Link } from 'react-router-dom'

import { Wrapper } from '~/layouts'

import { ReactComponent as Logo } from '~/assets/react.svg'

import styles from './Header.module.pcss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper fixedVerticalPadding>
        <div className={styles.content}>
          <Link to='/' className={styles.logo}>
            <Logo />
          </Link>
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
