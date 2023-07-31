import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

import { Button, Heading } from '~/components'
import { IconCross, IconRocket, IconEmojiSad } from '~/icons'
import { useClickOutside } from '~/utils/hooks'

import Card from '../Card/Card'
import { selectCart, setOpen } from '~/features/cart/slice'

import styles from './Cart.module.pcss'

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(selectCart)

  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (cart.isOpen) {
      const scrollBarWidth = window.innerWidth - document.body.clientWidth
      document.body.style.overflowY = 'hidden'
      document.body.style.paddingRight = `${scrollBarWidth}px`
    }
  }, [cart.isOpen])

  const handleClose = () => {
    if (cart.isOpen) {
      setIsClosing(true)
      setTimeout(() => {
        document.body.style.overflowY = 'auto'
        document.body.style.paddingRight = '0'
        dispatch(setOpen(false))
        setIsClosing(false)
      }, 200)
    }
  }

  const ref = useClickOutside(handleClose)

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={classNames(styles.cart, cart.isOpen && '-is-open', isClosing && '-is-closing')}>
      <div className={styles.container} ref={ref}>
        <div className={styles.header}>
          <Button onClick={handleClose} Icon={IconCross} color='neutral' size='s'></Button>
        </div>

        {cart && cart.count > 0 ? (
          <>
            <div className={styles.content}>
              {cart.items.map(item => (
                <Card key={item.id} {...item} />
              ))}
            </div>
            <div className={styles.footer}>
              <div className={styles.total}>
                <Heading as='div' like='h5' classProps='-margin-none -cart-total-title'>
                  TOTAL
                </Heading>
                <Heading as='div' like='h3' classProps='-margin-none'>
                  {cart.total.toFixed(2)} €
                </Heading>
              </div>
              <Button
                onClick={() => console.log('checkout')}
                size='l'
                Icon={IconRocket}
                classProps='-margin-top-m -cart-total-button'
              >
                Continue to checkout
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.empty}>
              You have no Pokemon
              <br />
              in your shopping cart
              <IconEmojiSad size='l' />
              <Button onClick={handleClose} classProps='-margin-top-m'>
                Continue shopping
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
