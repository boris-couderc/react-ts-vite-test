import { Header, Bar, Wrapper, Footer } from '~/layouts'
import { Cart, Search } from '~/features'

import styles from './Page.module.pcss'

type PageProps = {
  children: React.ReactNode
}

const Page = ({ children }: PageProps) => {
  return (
    <>
      <div className={styles.page}>
        <Header />
        <Bar>
          <Search />
        </Bar>
        <main className={styles.main}>
          <Wrapper>{children}</Wrapper>
        </main>
        <Footer />
        <Cart />
      </div>
    </>
  )
}

export default Page
