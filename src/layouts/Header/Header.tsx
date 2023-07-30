import { Link } from 'react-router-dom'

import { Cart } from '~/features'

import { Wrapper } from '~/layouts'

import logo from '~/assets/logo.png'

import styles from './Header.module.pcss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper fixedVerticalPadding>
        <div className={styles.content}>
          <Link to='/' className={styles.logo}>
            <img src={logo} alt='' />
          </Link>
        </div>
        <Cart />
      </Wrapper>
    </header>
  )
}

export default Header
