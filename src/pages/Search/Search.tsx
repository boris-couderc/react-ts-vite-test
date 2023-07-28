import { List } from '~/features'
import { Heading } from '~/components'

// import styles from './Search.module.pcss'

const Search = () => {
  return (
    <>
      {/* <div className={styles.search}> */}
      <Heading classProps='-txt-center'>Search result</Heading>
      <List />
      {/* </div> */}
    </>
  )
}

export default Search
