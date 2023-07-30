import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

import { Button, Input } from '~/components'
import { IconAdd, IconRemove } from '~/icons'

import { addItem, removeItem, updateQuantity, selectCartItems } from '~/features/cart/slice'

import { Pokemon } from '../../../types'

import styles from './Quantifier.module.pcss'

const Quantifier = ({ item }: { item: Pokemon }) => {
  const dispatch = useDispatch()

  const quantityInCart = useSelector(selectCartItems).find(itemInCart => itemInCart.id === item.id)?.quantity ?? 0
  const [quantityLocal, setQuantityLocal] = useState(quantityInCart)
  const [isFocus, setIsFocus] = useState(false)

  const handleAddItemToCart = () => {
    setIsFocus(false)
    if (!item.price) return
    dispatch(addItem({ id: item.id, name: item.name, price: item.price }))
  }

  const handleUpdateItemQuantityLocal = (value: string) => {
    setQuantityLocal(Number(value))
  }

  const handleUpdateItemQuantityToCart = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(updateQuantity({ id: item.id, quantity: quantityLocal }))
  }

  const handleRemoveItemToCart = () => {
    setIsFocus(false)
    dispatch(removeItem({ id: item.id }))
  }

  const handleFocus = () => {
    setQuantityLocal(quantityInCart)
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  return (
    <>
      {item.price ? (
        <div className={classNames(styles.quantifier, '-margin-top-m')}>
          {quantityInCart ? (
            <>
              <Button onClick={handleRemoveItemToCart} Icon={IconRemove} size='s' />
              <form onSubmit={handleUpdateItemQuantityToCart}>
                <Input
                  value={isFocus ? `${quantityLocal}` : `${quantityInCart}`}
                  style='dark'
                  onChange={handleUpdateItemQuantityLocal}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  classProps='-card-input'
                />
              </form>
              <Button onClick={handleAddItemToCart} Icon={IconAdd} size='s' />
            </>
          ) : (
            <Button onClick={handleAddItemToCart} Icon={IconAdd} size='s'>
              Add to cart
            </Button>
          )}
        </div>
      ) : null}
    </>
  )
}

export default Quantifier
