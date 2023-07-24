import { Link } from 'react-router-dom'

import styles from './Page.module.pcss'

const Page = () => {
  return (
    <>
      <div className={styles.page}>
        <p>Page content</p>
        <Link to='/'>Home</Link>
      </div>
    </>
  )
}

export default Page
