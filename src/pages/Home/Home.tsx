import { List } from '~/features'
import { Heading } from '~/components'

// import styles from './Home.module.pcss'

const Home = () => {
  return (
    <>
      {/* <div className={styles.home}> */}
      <Heading classProps='-txt-center'>Discover all Pokemon</Heading>
      <List />
      {/* </div> */}
    </>
  )
}

export default Home
