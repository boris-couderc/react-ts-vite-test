import classNames from 'classnames'

import styles from './Loader.module.pcss'

import { IconSpinner } from '~/icons'

type LoaderProps = {
  classProps?: string
  size?: 's' | 'm'
}

const Loader = ({ classProps, size = 'm' }: LoaderProps) => {
  return <IconSpinner classProps={classNames(styles.loader, classProps)} size={size} />
}

export default Loader
