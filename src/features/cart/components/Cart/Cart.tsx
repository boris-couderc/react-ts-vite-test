import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectCartCount, selectCartItems } from '~/features/cart/slice'

import styles from './Cart.module.pcss'

const Cart = () => {
  const count = useSelector(selectCartCount)
  const items = useSelector(selectCartItems)

  useEffect(() => {
    console.log(items)
  }, [items])

  return (
    <div className={styles.cart}>
      cart : {count}
      <br />
      lines :
      {items.map(item => {
        return (
          <span key={item.id} style={{ border: '1px solid grey' }}>
            {item.quantity} : {item.name}
          </span>
        )
      })}
    </div>
  )
}

export default Cart
