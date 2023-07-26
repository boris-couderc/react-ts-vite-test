import { Grid } from '~/components'

import Card from '../Card/Card'

import { useGetPokemonsQuery } from '../../api'

const List = () => {
  const { data, isLoading, isSuccess, isError } = useGetPokemonsQuery()

  if (isLoading) return <>Loading ...</>

  if (isError) return <>Error</>

  if (isSuccess && data?.data?.length > 0) {
    return (
      <Grid>
        {data.data.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </Grid>
    )
  } else {
    return <>No data</>
  }
}

export default List
