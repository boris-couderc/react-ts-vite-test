import classNames from 'classnames'

import styles from './Input.module.pcss'

type InputProps = {
  type?: string
  classProps?: string
  placeholder?: string
}

const Input = ({ type = 'type', classProps, placeholder }: InputProps) => {
  return <input type={type} className={classNames(styles.input, classProps)} placeholder={placeholder} />
}

export default Input
