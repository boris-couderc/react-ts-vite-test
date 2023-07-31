import { Box, Heading, LazyLoadingImage } from '~/components'

import { Quantifier } from '~/features'
import { Pokemon } from '~/features/types'

import styles from './Card.module.pcss'

const Card = ({ item }: { item: Pokemon }) => {
  return (
    <Box classProps={styles['-card-box']}>
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
            <Heading as='span' like='h6'>
              HP :
            </Heading>{' '}
            {item.hp}
          </div>
        )}
        {item.rarity && (
          <div>
            <Heading as='span' like='h6'>
              Rarity :
            </Heading>{' '}
            {item.rarity}
          </div>
        )}
        {item.types && item.types?.length > 0 && (
          <div>
            <Heading as='span' like='h6'>
              Types :
            </Heading>{' '}
            {item.types.join(', ')}
          </div>
        )}
        {item.subtypes && item.subtypes?.length > 0 && (
          <div>
            <Heading as='span' like='h6'>
              Subtypes :
            </Heading>{' '}
            {item.subtypes.join(', ')}
          </div>
        )}
        {item.rules && item.rules?.length > 0 && (
          <div>
            <Heading as='span' like='h6'>
              Rules :
            </Heading>{' '}
            {item.rules.join(' ')}
          </div>
        )}
        <div className='-margin-top-s'>
          {item.price ? (
            <>
              <Heading as='span' like='h4'>
                Price :
              </Heading>
              <span className={styles.price}> {item.price.toFixed(2)} €</span>
            </>
          ) : null}
        </div>
      </div>
      <Quantifier
        id={item.id}
        name={item.name}
        price={item.price}
        image={item.images.small}
        classProps={styles['-list-quantifier']}
      />
    </Box>
  )
}

export default Card
