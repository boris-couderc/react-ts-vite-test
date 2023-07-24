import { Header, Nav, Wrapper, Footer } from '~/layouts'

import styles from './Page.module.pcss'

type PageProps = {
  children: React.ReactNode
}

const Page = ({ children }: PageProps) => {
  return (
    <div className={styles.page}>
      <Header />
      <Nav />
      <main className={styles.main}>
        <Wrapper /* wide */>{children}</Wrapper>
      </main>
      <Footer />
    </div>
  )
}

export default Page
