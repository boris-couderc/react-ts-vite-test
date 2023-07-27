import { Link } from 'react-router-dom'

import styles from './Home.module.pcss'

import { Heading } from '~/components'

import { List } from '~/features/list'

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <Heading classProps='-txt-center'>Discover all Pokemon</Heading>
        <List />
        {/* <p>
          <Link to='/page'>Page</Link>
        </p> */}
      </div>
    </>
  )
}

export default Home
