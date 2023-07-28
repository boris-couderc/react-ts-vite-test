import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Card, ResultInfo, Filter } from '..'
import { Grid, Pagination, Loader } from '~/components'
import { IconEmojiSad } from '~/icons'

import { useGetPokemonsQuery } from '../../api'
import { selectSearchCurrentValue } from '~/features/search/slice'

import { scrollTop } from '~/utils/functions'

import styles from './List.module.pcss'

type QueryParamsState = {
  query: string
  page: number
  filter: string
}

const List = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const urlParams = new URLSearchParams(searchParams)

  const searchCurrentValue = useSelector(selectSearchCurrentValue)

  const [queryParams, setQueryParams] = useState<QueryParamsState>({
    query: searchParams.get('query') || '',
    page: Number(searchParams.get('page')) || 1,
    filter: searchParams.get('filter') || '',
  })

  const { data, isLoading, isFetching } = useGetPokemonsQuery(queryParams)

  const updateParams = (params: QueryParamsState) => {
    scrollTop()
    setQueryParams(params)
    if (params.query !== '') {
      urlParams.set('query', params.query)
    } else {
      urlParams.delete('query')
    }
    if (params.page > 1) {
      urlParams.set('page', `${params.page}`)
    } else {
      urlParams.delete('page')
    }
    if (params.filter !== '') {
      urlParams.set('filter', `${params.filter}`)
    } else {
      urlParams.delete('filter')
    }
    setSearchParams(urlParams)
  }

  useEffect(() => {
    updateParams({
      query: searchCurrentValue,
      page: 1,
      filter: '',
    })
  }, [searchCurrentValue])

  const handleChangePage = (value: string) => {
    updateParams({
      ...queryParams,
      page: queryParams.page + (value === 'prev' ? -1 : 1),
    })
  }

  const handleChangeFilter = (value: string) => {
    updateParams({
      ...queryParams,
      page: 1,
      filter: value,
    })
  }

  useEffect(() => {
    const params = {
      query: searchParams.get('query') || '',
      page: Number(searchParams.get('page')) || 1,
      filter: searchParams.get('filter') || '',
    }
    if (JSON.stringify(params) !== JSON.stringify(queryParams)) {
      setQueryParams(params)
    }
  }, [searchParams])

  if (isLoading)
    return (
      <div className={styles.header}>
        <Loader />
      </div>
    )

  return (
    <>
      <div className={styles.header}>
        {isFetching || isLoading ? (
          <Loader />
        ) : (
          <>{data && <ResultInfo query={queryParams.query} count={data.totalCount} filter={queryParams.filter} />}</>
        )}
      </div>

      <div className={styles.actions}>
        {((data && data.totalCount > 0) || queryParams.filter !== '') && (
          <Filter value={queryParams.filter} onChange={handleChangeFilter} classProps={styles['list-filter']} />
        )}
        {data && data.totalCount > data.pageSize && (
          <Pagination
            current={queryParams.page}
            total={Math.ceil(data.totalCount / data.pageSize)}
            onChange={handleChangePage}
            classProps={styles['list-pagination']}
          />
        )}
      </div>

      {data && data.data?.length > 0 ? (
        <>
          <Grid>
            {data.data.map(item => (
              <Card key={item.id} item={item} />
            ))}
          </Grid>

          <div className={styles['footer']}>
            {data.totalCount > data.pageSize && (
              <Pagination
                current={queryParams.page}
                total={Math.ceil(data.totalCount / data.pageSize)}
                onChange={handleChangePage}
              />
            )}
          </div>
        </>
      ) : (
        <div className={styles['no-result']}>
          No results sorry
          <IconEmojiSad size='l' />
        </div>
      )}
    </>
  )
}

export default List
