import { Button, Input } from '~/components'

import { IconSearch } from '~/icons'

import styles from './Search.module.pcss'

const Search = () => {
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('submit')
  }

  return (
    <div className={styles.search}>
      <form onSubmit={handleOnSubmit} className='searchbar__container'>
        <Input type='search' placeholder='Search a Pokemon ...' />
        <Button type='submit' outline Icon={IconSearch}>
          Search
        </Button>
      </form>
    </div>
  )
}

export default Search
