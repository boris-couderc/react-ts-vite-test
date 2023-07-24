import { NavLink } from 'react-router-dom'
import { Wrapper } from '~/layouts'

import styles from './Nav.module.pcss'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Wrapper fixedVerticalPadding>
        <ul>
          <li>
            <NavLink end to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/page'>Page</NavLink>
          </li>
        </ul>
      </Wrapper>
    </nav>
  )
}

export default Nav
