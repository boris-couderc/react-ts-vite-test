import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Grid, Pagination, Loader } from '~/components'
import Card from '../Card/Card'
import { IconEmojiSad } from '~/icons'

import { useGetPokemonsQuery } from '../../api'

import styles from './List.module.pcss'

const List = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [page, setPage] = useState(1)

  const { data, isLoading, isFetching } = useGetPokemonsQuery(page)

  useEffect(() => {
    setPage(Number(searchParams.get('page') || 1))
  }, [searchParams])

  const handleChangePage = (value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', `${page + (value === 'prev' ? -1 : 1)}`)
    setSearchParams(params)
  }

  if (isLoading)
    return (
      <div className={styles.actions}>
        <Loader classProps={styles['list-loader']} />
      </div>
    )

  if (data && data.data?.length > 0) {
    return (
      <>
        <div className={styles.actions}>
          {(isFetching || isLoading) && <Loader classProps={styles['list-loader']} />}
          {data.totalCount > data.pageSize && (
            <Pagination
              current={page}
              total={Math.ceil(data.totalCount / data.pageSize)}
              changePage={handleChangePage}
              classProps={styles['list-pagination']}
            />
          )}
        </div>
        <Grid>
          {data.data.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </Grid>
        <div className={styles.actions}>
          <Pagination
            current={page}
            total={Math.ceil(data.totalCount / data.pageSize)}
            changePage={handleChangePage}
            classProps={styles['list-pagination']}
          />
        </div>
      </>
    )
  } else {
    return (
      <div className={styles['no-result']}>
        Sorry no results
        <IconEmojiSad size='l' />
      </div>
    )
  }
}

export default List
