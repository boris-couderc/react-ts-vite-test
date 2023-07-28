import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Card, ResultInfo, Filter } from '../../components'
import { Grid, Pagination, Loader } from '~/components'
import { IconEmojiSad } from '~/icons'

import { useGetPokemonsQuery } from '../../api'

import { selectSearchCurrentValue } from '~/features/search/slice'

import styles from './List.module.pcss'

const List = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1)
  const query = useSelector(selectSearchCurrentValue)

  const { data, isLoading, isFetching, isError } = useGetPokemonsQuery({ query, page })

  useEffect(() => {
    setPage(Number(searchParams.get('page') || 1))
  }, [searchParams])

  const handleChangePage = (value: string) => {
    const newPage = page + (value === 'prev' ? -1 : 1)
    setPage(newPage)
    const params = new URLSearchParams(searchParams)
    params.set('page', `${newPage}`)
    setSearchParams(params)
  }

  if (isLoading)
    return (
      <div className={styles.actions}>
        <Loader classProps={styles['list-loader']} />
      </div>
    )

  if (isError || (data && data.data?.length === 0))
    return (
      <div className={styles['no-result']}>
        Sorry no results
        <IconEmojiSad size='l' />
      </div>
    )
  if (data && data.data?.length > 0) {
    return (
      <>
        {/* {!isFetching && !isLoading ? (
          <div className={styles.actions}>
            <ResultInfo query={query} count={data.totalCount} />
          </div>
        ) : (
          <div className={styles.actions}>
            <Filter />
          </div>
        )} */}

        {/* {data.totalCount > data.pageSize && (
            <Pagination
              current={page}
              total={Math.ceil(data.totalCount / data.pageSize)}
              changePage={handleChangePage}
              classProps={styles['list-pagination']}
            />
          )} */}

        {(isFetching || isLoading) && <Loader classProps={styles['list-loader']} />}
        <div className={styles.actions}>
          <ResultInfo query={query} count={data.totalCount} />
        </div>
        <div className={styles.actions}>
          <Filter />
        </div>

        {/* - */}

        <Pagination
          current={page}
          total={Math.ceil(data.totalCount / data.pageSize)}
          changePage={handleChangePage}
          classProps={styles['list-pagination']}
        />

        <Grid>
          {data.data.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </Grid>
        <div className={styles['actions-bottom']}>
          {data.totalCount > data.pageSize && (
            <Pagination
              current={page}
              total={Math.ceil(data.totalCount / data.pageSize)}
              changePage={handleChangePage}
              classProps={styles['list-pagination']}
            />
          )}
        </div>
      </>
    )
  }
}

export default List
