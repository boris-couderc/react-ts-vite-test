import classNames from 'classnames'

import styles from './Input.module.pcss'

type InputProps = {
  value?: string
  type?: string
  classProps?: string
  placeholder?: string
  onChange: (value: string) => void
}

const Input = ({ value = '', type = 'type', classProps, placeholder, onChange }: InputProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <input
      type={type}
      className={classNames(styles.input, classProps)}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
    />
  )
}

export default Input
