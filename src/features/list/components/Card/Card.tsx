import classNames from 'classnames'

import { Box, Button, Heading } from '~/components'
import { IconAdd } from '~/icons'

import { Pokemon } from '../../types'

import styles from './Card.module.pcss'

const Card = ({ item }: { item: Pokemon }) => {
  return (
    <Box classProps='-txt-center'>
      <img
        src={item.images.small}
        srcSet={`${item.images.small} 1x, ${item.images.large} 2x`}
        alt={item.name}
        style={{ maxWidth: '100%' }}
        className={classNames(styles.img)}
      />
      <Heading as='h2' like='h3' classProps='-margin-top-s -margin-bottom-s'>
        {item.name}
      </Heading>
      <div>{item.supertype}</div>
      <Button href='/page' Icon={IconAdd} size='s' classProps='-margin-top-m'>
        Add to cart
      </Button>
    </Box>
  )
}

export default Card
