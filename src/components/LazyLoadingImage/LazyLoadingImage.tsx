import { useState } from 'react'

import classNames from 'classnames'

import styles from './LazyLoadingImage.module.pcss'

type LazyLoadingImageProps = {
  srcUrl: string
  srcSet?: string
  alt?: string
}

const LazyLoadingImage = ({ srcUrl, srcSet, alt }: LazyLoadingImageProps) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={classNames(styles['lazy-loading-image'], { '-loaded': loaded })}>
      <img src={srcUrl} srcSet={srcSet} alt={alt} loading='lazy' onLoad={() => setLoaded(true)} />
    </div>
  )
}

export default LazyLoadingImage
