import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {
  setSearchInputValue,
  setSearchCurrentValue,
  selectSearchInputValue,
  cleanSearch,
} from '~/features/search/slice'

import { Button, Input } from '~/components'
import { IconSearch } from '~/icons'

import styles from './Search.module.pcss'

const Search = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const location = useLocation()
  const inputValue = useSelector(selectSearchInputValue)

  useEffect(() => {
    if (location.pathname !== '/search') {
      dispatch(cleanSearch())
    }
  }, [location.pathname])

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputValue !== '') {
      if (inputValue.length == 1) return
      navigate(`/search?query=${inputValue}`)
      dispatch(setSearchCurrentValue(inputValue))
    } else {
      navigate(`/`)
      dispatch(cleanSearch())
    }
  }

  const handleOnChange = (value: string) => {
    dispatch(setSearchInputValue(value))
  }

  return (
    <div className={styles.search}>
      <form onSubmit={handleOnSubmit} className='searchbar__container'>
        <Input value={inputValue} type='search' placeholder='Search a Pokemon by name ...' onChange={handleOnChange} />
        <Button type='submit' outline Icon={IconSearch}>
          Search
        </Button>
      </form>
    </div>
  )
}

export default Search
