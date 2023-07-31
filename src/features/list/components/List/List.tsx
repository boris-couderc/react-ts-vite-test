import { useSearchParams } from 'react-router-dom'

import { Card, ResultInfo, Filter } from '..'
import { Grid, Pagination, Loader } from '~/components'
import { IconEmojiSad } from '~/icons'
import { scrollTop } from '~/utils/functions'

import { useGetPokemonsQuery } from '../../api'

import styles from './List.module.pcss'

const List = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const urlParams = new URLSearchParams(searchParams)

  const queryParams = {
    search: urlParams.get('search') ?? '',
    page: Number(urlParams.get('page')) || 1,
    filter: urlParams.get('filter') ?? '',
  }

  const { data, isLoading, isFetching } = useGetPokemonsQuery(queryParams)

  const handleChangePage = (value: string) => {
    scrollTop()
    urlParams.set('page', `${queryParams.page + (value === 'prev' ? -1 : +1)}`)
    setSearchParams(urlParams)
  }

  const handleChangeFilter = (value: string) => {
    scrollTop()
    if (value) {
      urlParams.set('filter', value)
    } else {
      urlParams.delete('filter')
    }
    urlParams.delete('page')
    setSearchParams(urlParams)
  }

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
          <>{data && <ResultInfo query={queryParams.search} count={data.totalCount} filter={queryParams.filter} />}</>
        )}
      </div>
      <div className={styles.actions}>
        {((data && data.totalCount > 0) || queryParams.filter !== '') && (
          <Filter value={queryParams.filter} onChange={handleChangeFilter} classProps={styles['-list-filter']} />
        )}
        {data && data.totalCount > data.pageSize && (
          <Pagination
            current={queryParams.page}
            total={Math.ceil(data.totalCount / data.pageSize)}
            onChange={handleChangePage}
            classProps={styles['-list-pagination']}
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
