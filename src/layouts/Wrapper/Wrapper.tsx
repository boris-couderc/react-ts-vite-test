import classNames from 'classnames'
import styles from './Wrapper.module.pcss'

type WrapperProps = {
  children: React.ReactNode
  wide?: boolean
  fixedVerticalPadding?: boolean
  className?: string
}

const Wrapper = ({ children, wide, fixedVerticalPadding, className }: WrapperProps) => {
  return (
    <div
      className={classNames(
        styles.wrapper,
        { '-wide': wide },
        { '-fixed-vertical-padding': fixedVerticalPadding },
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Wrapper
