import classNames from 'classnames'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'

type HeadingProps = {
  children?: React.ReactNode
  as?: HeadingTag
  like?: HeadingTag
  classProps?: string
}

const Heading = ({ children, as = 'h1', like, classProps }: HeadingProps) => {
  const Tag = as
  return <Tag className={classNames(like && `-${like}`, classProps)}>{children}</Tag>
}

export default Heading
