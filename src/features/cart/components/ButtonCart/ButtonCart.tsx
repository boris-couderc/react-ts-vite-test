import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

import { Heading } from '~/components'
import { IconShoppingBag } from '~/icons'

import { selectCart, setOpen } from '~/features/cart/slice'

import styles from './ButtonCart.module.pcss'

type ButtonCartProps = {
  classProps?: string
}

const ButtonCart = ({ classProps }: ButtonCartProps) => {
  const dispatch = useDispatch()
  const cart = useSelector(selectCart)

  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    setIsAnimated(true)
    const timer = setTimeout(() => {
      setIsAnimated(false)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [cart.count])

  const handleOpenCart = () => {
    dispatch(setOpen(true))
  }

  return (
    <button onClick={handleOpenCart} className={classNames(styles['button-cart'], classProps)}>
      <div className={styles.icon}>
        {cart.count > 0 && <div className={classNames(styles.count, isAnimated && '-is-animated')}>{cart.count}</div>}
        <IconShoppingBag color={'primary'} size='xl' />
      </div>
      <div className={styles.text}>
        <Heading as='div' like='h4' classProps='-margin-none'>
          Shopping cart
        </Heading>
        {cart.total > 0 && <div className={styles.total}>{cart.total.toFixed(2)} €</div>}
      </div>
    </button>
  )
}

export default ButtonCart
