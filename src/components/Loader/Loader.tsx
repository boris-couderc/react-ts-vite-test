import classNames from 'classnames'

import styles from './Loader.module.pcss'

import { IconSpinner } from '~/icons'

type LoaderProps = {
  classProps?: string
}

const Loader = ({ classProps }: LoaderProps) => {
  return <IconSpinner classProps={classNames(styles.loader, classProps)} />
}

export default Loader
