import { Box, Button, Heading, LazyLoadingImage } from '~/components'
import { IconAdd } from '~/icons'

import { Pokemon } from '../../types'

import styles from './Card.module.pcss'

const Card = ({ item }: { item: Pokemon }) => {
  return (
    <Box classProps={styles.box}>
      <LazyLoadingImage
        srcUrl={item.images.small}
        srcSet={`${item.images.small} 1x, ${item.images.large} 2x`}
        alt={item.name}
      />
      <Heading as='h2' like='h3' classProps='-margin-top-m -margin-bottom-s -txt-center'>
        {item.name}
      </Heading>
      <div className={styles.details}>
        {item.hp && (
          <div>
            <Heading as='span' like='h5'>
              HP :
            </Heading>{' '}
            {item.hp}
          </div>
        )}
        {item.rarity && (
          <div>
            <Heading as='span' like='h5'>
              Rarity :
            </Heading>{' '}
            {item.rarity}
          </div>
        )}
        {item.types && item.types?.length > 0 && (
          <div>
            <Heading as='span' like='h5'>
              Types :
            </Heading>{' '}
            {item.types.join(', ')}
          </div>
        )}
        {item.subtypes && item.subtypes?.length > 0 && (
          <div>
            <Heading as='span' like='h5'>
              Subtypes :
            </Heading>{' '}
            {item.subtypes.join(', ')}
          </div>
        )}
        {item.rules && item.rules?.length > 0 && (
          <div>
            <Heading as='span' like='h5'>
              Rules :
            </Heading>{' '}
            {item.rules.join(' ')}
          </div>
        )}
        <div className='-margin-top-s'>
          {item.price && (
            <Heading as='span' like='h4'>
              Price : {item.price}€
            </Heading>
          )}
        </div>
      </div>
      <Button href='/page' Icon={IconAdd} size='s' classProps='-margin-top-m'>
        Add to cart
      </Button>
    </Box>
  )
}

export default Card
