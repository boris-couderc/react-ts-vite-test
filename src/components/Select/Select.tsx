import classNames from 'classnames'

import styles from './Select.module.pcss'

type SelectProps = {
  value?: string
  options: string[]
  classProps?: string
  onChange: (value: string) => void
}

const Select = ({ value = '', options, classProps, onChange }: SelectProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }

  return (
    <>
      {options && options.length > 0 && (
        <select
          name='filter'
          id='filter'
          value={value}
          onChange={handleOnChange}
          className={classNames(styles.select, classProps)}
        >
          <option value=''>Choose a rarity</option>
          {options.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      )}
    </>
  )
}

export default Select
