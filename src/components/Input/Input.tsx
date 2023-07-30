import classNames from 'classnames'

import styles from './Input.module.pcss'

type InputProps = {
  value?: string
  type?: string
  classProps?: string
  placeholder?: string
  style?: 'light' | 'dark'
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
      className={classNames(styles.input, style && `-${style}`, classProps)}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
}

export default Input
