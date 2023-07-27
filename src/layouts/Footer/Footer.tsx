import { Wrapper } from '~/layouts'

import styles from './Footer.module.pcss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper fixedVerticalPadding>© Pokemon Tech 2023 all rights reserved</Wrapper>
    </footer>
  )
}

export default Footer
