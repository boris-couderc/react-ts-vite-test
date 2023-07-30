import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

import { Button, Input } from '~/components'
import { IconSearch } from '~/icons'

import styles from './Search.module.pcss'

const Search = () => {
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const [inputValue, setInputValue] = useState(searchParams.get('search') || '')
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/search') {
      setInputValue('')
    }
  }, [location.pathname])

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputValue !== '') {
      if (inputValue.length == 1) return
      navigate(`/search?search=${inputValue}`)
    } else {
      navigate(`/`)
      setInputValue('')
    }
  }

  const handleOnChange = (value: string) => {
    setInputValue(value)
  }

  return (
    <div className={styles.search}>
      <form onSubmit={handleOnSubmit}>
        <Input value={inputValue} type='search' placeholder='Search a Pokemon by name ...' onChange={handleOnChange} />
        <Button type='submit' outline Icon={IconSearch}>
          Search
        </Button>
      </form>
    </div>
  )
}

export default Search
