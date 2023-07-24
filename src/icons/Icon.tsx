import classNames from 'classnames'
import icons from './icons.svg'
import styles from './Icon.module.css'

type IconProps = {
  color?: 'primary' | 'secondary'
}

interface IconWrapperProps extends IconProps {
  name: string
}

const Icon = ({ name, color }: IconWrapperProps) => {
  return (
    <div className={styles.icon}>
      <svg viewBox='0 0 24 24' className={classNames(color && styles[color])}>
        <use href={`${icons}#${name}`} />
      </svg>
    </div>
  )
}

const IconReact = ({ color }: IconProps) => <Icon name='react' color={color} />
const IconAccount = ({ color }: IconProps) => <Icon name='account' color={color} />

export { IconReact, IconAccount }
