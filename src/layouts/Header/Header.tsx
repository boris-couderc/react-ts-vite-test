import { Link } from 'react-router-dom'

import { Wrapper } from '~/layouts'
import { ButtonCart } from '~/features'

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
          <ButtonCart classProps={styles['-header-button-cart']} />
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
