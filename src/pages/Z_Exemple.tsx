import { useState } from 'react'

import '~/styles/index.pcss'

import { IconReact, IconAccount } from '../icons/Icon'

import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
      </div>
      <h1>Lorem</h1>
      <div className='home'>
        <div className='home_card'>
          <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      </div>

      <IconReact color='primary' />
      <IconAccount color='secondary' />
      <IconAccount />
    </>
  )
}

export default App
