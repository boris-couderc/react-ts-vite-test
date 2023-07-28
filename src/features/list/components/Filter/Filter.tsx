import classNames from 'classnames'

import { Button, Select } from '~/components'
import { IconCross } from '~/icons'

import { useGetRaritiesQuery } from '../../api'

import styles from './Filter.module.pcss'

type FilterProps = {
  value: string
  classProps?: string
  onChange: (value: string) => void
}

const Filter = ({ value, classProps, onChange }: FilterProps) => {
  const { data } = useGetRaritiesQuery()

  const handleClear = () => onChange('')

  return (
    <div className={classNames(styles.filter, classProps)}>
      {data && data.data?.length > 0 && (
        <>
          <Select value={value} options={data.data} onChange={onChange} />
          {value && <Button Icon={IconCross} color={'primary'} size='s' onClick={handleClear} />}
        </>
      )}
    </div>
  )
}

export default Filter
