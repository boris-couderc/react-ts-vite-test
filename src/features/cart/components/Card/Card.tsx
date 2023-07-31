import { useDispatch } from 'react-redux'

import { Box, Button, Heading, LazyLoadingImage } from '~/components'
import { IconTrash } from '~/icons'

import Quantifier from '../Quantifier/Quantifier'
import { updateQuantity } from '../../slice'

import styles from './Card.module.pcss'

type CardProps = {
  id: number
  name: string
  price: number
  image: string
}

const Card = ({ id, name, price, image }: CardProps) => {
  const dispatch = useDispatch()

  const handleRemoveItem = () => {
    console.log('remove item')
    dispatch(updateQuantity({ id, quantity: 0 }))
  }

  return (
    <Box classProps={styles['-card-box']} padding='s' borderRadius='s'>
      <LazyLoadingImage srcUrl={image} />
      <div className={styles.content}>
        <div>
          <Heading as='div' like='h5' classProps='-margin-none'>
            {name}
          </Heading>
          <div className={styles.price}>{price.toFixed(2)} €</div>
        </div>
        <div className={styles.actions}>
          <Quantifier id={id} name={name} price={price} image={image} size='xs' align='right' />
          <Button onClick={handleRemoveItem} Icon={IconTrash} color='neutral' size='xs' />
        </div>
      </div>
    </Box>
  )
}

export default Card
