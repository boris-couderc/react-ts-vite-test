import styles from './Home.module.pcss'

import { Heading } from '~/components'

import { List } from '~/features/list'

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <Heading>List</Heading>
        <List />
      </div>
    </>
  )
}

export default Home
