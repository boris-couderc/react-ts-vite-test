import { IconEmojiSad } from '~/icons'

import styles from './NotFound.module.pcss'

const NotFound = () => {
  return (
    <>
      <div className={styles['no-found']}>
        Not found content
        <IconEmojiSad size='l' />
      </div>
    </>
  )
}

export default NotFound
