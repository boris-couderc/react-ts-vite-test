import classNames from 'classnames'

import styles from './Pagination.module.pcss'

import { Button } from '..'
import { IconLeft, IconRight } from '~/icons'

type PaginationProps = {
  current: number
  total: number
  classProps?: string
  changePage: (value: string) => void
}

const Pagination = ({ current, total, classProps, changePage }: PaginationProps) => {
  const handleChangePage = (value: string) => {
    if (current === 1 && value === 'prev') return
    if (current === total && value === 'next') return
    changePage(value)
  }

  return (
    <div className={classNames(styles.pagination, classProps)}>
      <Button
        Icon={IconLeft}
        onClick={() => {
          handleChangePage('prev')
        }}
        disabled={current <= 1}
        size='s'
      />
      <div>
        <span className='current'>{current}</span>
        {total}
      </div>
      <Button
        Icon={IconRight}
        onClick={() => {
          handleChangePage('next')
        }}
        disabled={current >= total}
        size='s'
      />
    </div>
  )
}

export default Pagination
