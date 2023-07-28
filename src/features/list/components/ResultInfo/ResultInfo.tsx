import { Heading } from '~/components'

type ResultInfoProps = {
  query: string
  count: number
  filter?: string
}

const ResultInfo = ({ query, count, filter }: ResultInfoProps) => {
  // if (query !== '')
  return (
    <div className='-txt-center'>
      <Heading as='span' like='h5' classProps='-txt-center'>
        {count}
      </Heading>
      {count > 1 ? ' Pokemons ' : ' Pokemon '}
      {query && (
        <>
          for{' '}
          <Heading as='span' like='h5' classProps='-txt-center'>
            {query}
          </Heading>{' '}
        </>
      )}
      {filter && (
        <>
          {query ? 'and ' : 'with '}
          rarity{' '}
          <Heading as='span' like='h5' classProps='-txt-center'>
            {filter}
          </Heading>
        </>
      )}
    </div>
  )
}

export default ResultInfo
