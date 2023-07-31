import { Link } from 'react-router-dom'

import { Button, Input } from '~/components'
import { IconAdd, IconRemove, IconRocket } from '~/icons'

import styles from './Page.module.pcss'

const Page = () => {
  return (
    <>
      <div className={styles.page}>
        <h1>Lorem ipsum</h1>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <h2>Lorem ipsum dolor sit amet</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <p>
          <Link to='/'>Home</Link>
        </p>
        <Button onClick={() => console.log('click')} Icon={IconAdd}></Button>
        <Button onClick={() => console.log('click')} Icon={IconAdd} size='l'></Button>
        <Button href='/' Icon={IconAdd} size='s'></Button>
        <Button href='/' Icon={IconAdd} size='xs'></Button>
        <br />
        <Button onClick={() => console.log('click')} Icon={IconAdd}>
          test
        </Button>
        <Button onClick={() => console.log('click')} Icon={IconAdd} size='l'>
          test
        </Button>
        <Button href='/' Icon={IconAdd} size='s'>
          test
        </Button>
        <Button href='/' Icon={IconAdd} size='xs'>
          test
        </Button>
        <br />
        <Button onClick={() => console.log('click')} color='neutral'>
          test
        </Button>
        <Button onClick={() => console.log('click')} size='l' outline>
          test
        </Button>
        <Button href='/' size='s' disabled>
          test
        </Button>
        <Button href='/' size='xs' disabled>
          test
        </Button>
        <br />
        <IconAdd />
        <IconRemove color={'neutral'} />
        <IconRocket color={'primary'} />
        <br />
        <Input
          onChange={() => {
            console.log('change')
          }}
          type='text'
          placeholder='Search a Pokemon ...'
        />
      </div>
    </>
  )
}

export default Page
