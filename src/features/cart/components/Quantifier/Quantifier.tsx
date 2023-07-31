import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

import { Button, Input } from '~/components'
import { IconAdd, IconRemove } from '~/icons'

import { addItem, removeItem, updateQuantity, selectCartItems } from '../../slice'

import styles from './Quantifier.module.pcss'

type QuantifierProps = {
  id: number
  name: string
  image: string
  price?: number
  size?: 'xs' | 's'
  align?: 'left' | 'center' | 'right'
  classProps?: string
}

const Quantifier = ({ id, name, image, price, size = 's', align = 'center', classProps }: QuantifierProps) => {
  const dispatch = useDispatch()

  const quantityInCart = useSelector(selectCartItems).find(itemInCart => itemInCart.id === id)?.quantity ?? 0
  const [quantityLocal, setQuantityLocal] = useState(quantityInCart)
  const [isFocus, setIsFocus] = useState(false)

  const handleAddItemToCart = () => {
    setIsFocus(false)
    if (!price) return
    dispatch(addItem({ id, name, price, image }))
  }

  const handleUpdateItemQuantityLocal = (value: string) => {
    setQuantityLocal(Number(value))
  }

  const handleUpdateItemQuantityToCart = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(updateQuantity({ id, quantity: quantityLocal }))
  }

  const handleRemoveItemToCart = () => {
    setIsFocus(false)
    dispatch(removeItem({ id }))
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
      {price ? (
        <div className={classNames(styles.quantifier, size && `-${size}`, align && `-align-${align}`, classProps)}>
          {quantityInCart ? (
            <>
              <Button onClick={handleRemoveItemToCart} Icon={IconRemove} size={size} />
              <form onSubmit={handleUpdateItemQuantityToCart}>
                <Input
                  value={isFocus ? `${quantityLocal}` : `${quantityInCart}`}
                  style='dark'
                  onChange={handleUpdateItemQuantityLocal}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  classProps='-card-input'
                  size={size}
                />
              </form>
              <Button onClick={handleAddItemToCart} Icon={IconAdd} size={size} />
            </>
          ) : (
            <Button onClick={handleAddItemToCart} Icon={IconAdd} size={size}>
              Add to cart
            </Button>
          )}
        </div>
      ) : null}
    </>
  )
}

export default Quantifier
