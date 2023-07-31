import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { selectCart } from '~/features/cart/slice'

import styles from './Cart.module.pcss'
import classNames from 'classnames'

const Cart = () => {
  const cart = useSelector(selectCart)

  // useEffect(() => {
  //   console.log(items)
  // }, [items])

  return (
    <div className={classNames(styles.cart, cart.isOpen && '-is-open')}>
      cart : {cart.count}
      <br />
      total : {cart.total}
      <br />
      lines :
      {cart.items.map(item => {
        return (
          <div key={item.id} style={{ border: '1px solid grey' }}>
            {item.quantity} : {item.name}
          </div>
        )
      })}
    </div>
  )
}

export default Cart
