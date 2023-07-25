import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { IconProps } from '~/icons/types'
import { Color } from '~/types'

import styles from './Button.module.pcss'

type GenericProps = {
  children?: string
  Icon?: React.ComponentType<IconProps>
  color?: Color
  size?: 's' | 'm' | 'l'
  outline?: boolean
  disabled?: boolean
  classProps?: string
  title?: string
}

type SubmitButtonProps = GenericProps & {
  type: 'submit'
  href?: never
  onClick?: never
}

type ClassicButtonProps = GenericProps & {
  type?: 'button'
  href?: never
  onClick: () => void
}

type LinkButtonProps = GenericProps & {
  type?: never
  href: string
  onClick?: never
}

type ButtonPros = SubmitButtonProps | ClassicButtonProps | LinkButtonProps

const Button = ({
  children,
  Icon,
  title,
  color = 'primary',
  size,
  outline,
  disabled,
  classProps,
  type,
  href,
  onClick,
}: ButtonPros) => {
  const classes = classNames(
    styles.button,
    color && `-${color}`,
    size && `-${size}`,
    outline && '-outline',
    disabled && '-disabled',
    !children && '-icon',
    classProps,
  )

  const content = (
    <>
      {Icon && <Icon size={size} ariaHidden={!!children} title={title} />}
      {children && <span className={styles.label}>{children}</span>}
    </>
  )

  if (href) {
    return (
      <Link to={href} className={classes} title={title}>
        {content}
      </Link>
    )
  } else {
    return (
      <button type={type} className={classes} disabled={disabled} onClick={onClick} title={title}>
        {content}
      </button>
    )
  }
}

export default Button
