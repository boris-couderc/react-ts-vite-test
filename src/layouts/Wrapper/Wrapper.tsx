import classNames from 'classnames'
import styles from './Wrapper.module.pcss'

type WrapperProps = {
  children: React.ReactNode
  wide?: boolean
  fixedVerticalPadding?: boolean
  classProps?: string
}

const Wrapper = ({ children, wide, fixedVerticalPadding, classProps }: WrapperProps) => {
  return (
    <div
      className={classNames(
        styles.wrapper,
        { '-wide': wide },
        { '-fixed-vertical-padding': fixedVerticalPadding },
        classProps,
      )}
    >
      {children}
    </div>
  )
}

export default Wrapper
