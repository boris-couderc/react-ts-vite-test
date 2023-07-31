import classNames from 'classnames'

import styles from './Input.module.pcss'

type InputProps = {
  value?: string
  type?: string
  classProps?: string
  placeholder?: string
  style?: 'light' | 'dark'
  size?: 'xs' | 's' | 'm'
  onChange: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
}

const Input = ({
  value = '',
  type = 'type',
  classProps,
  placeholder,
  style = 'light',
  size = 'm',
  onChange,
  onFocus,
  onBlur,
}: InputProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <input
      type={type}
      className={classNames(styles.input, style && `-${style}`, size && `-${size}`, classProps)}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
}

export default Input
