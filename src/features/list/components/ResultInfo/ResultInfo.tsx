import { Heading } from '~/components'

type ResultInfoProps = {
  query: string
  count: number
}

const ResultInfo = ({ query, count }: ResultInfoProps) => {
  if (query !== '')
    return (
      <div className='-txt-center'>
        <Heading as='span' like='h5' classProps='-txt-center'>
          {count}
        </Heading>{' '}
        results for{' '}
        <Heading as='span' like='h5' classProps='-txt-center'>
          {query}
        </Heading>{' '}
      </div>
    )
}

export default ResultInfo
