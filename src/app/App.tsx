import { Outlet } from 'react-router-dom'
import { Page } from '~/layouts'

import '~/styles/index.pcss'

function App() {
  return (
    <Page>
      <Outlet />
    </Page>
  )
}

export default App
