import { Wrapper } from '~/layouts'

import styles from './Footer.module.pcss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper fixedVerticalPadding>footer content</Wrapper>
    </footer>
  )
}

export default Footer
