import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

import styles from './Error.module.pcss'

const Error = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <>
      <div className={styles['error']}>
        <div>Error</div>
        {isRouteErrorResponse(error) && (
          <>
            {error.statusText}
            {error.status}
          </>
        )}
      </div>
    </>
  )
}

export default Error
