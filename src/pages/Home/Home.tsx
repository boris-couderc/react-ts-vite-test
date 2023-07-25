import styles from './Home.module.pcss'

import { Grid, Box, Button, Heading } from '~/components'

import { IconAdd } from '~/icons'

const CardTest = () => {
  return (
    <Box>
      <Heading as='h2' like='h3' classProps='-margin-none-top'>
        Title
      </Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <div className='-txt-right'>
        <Button href='/page' Icon={IconAdd} size='s' classProps='-margin-m-top'>
          Add to cart
        </Button>
      </div>
    </Box>
  )
}

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <Heading>List</Heading>
        <Grid>
          <CardTest />
          <CardTest />
          <CardTest />
          <CardTest />
          <CardTest />
          <CardTest />
          <CardTest />
        </Grid>
      </div>
    </>
  )
}

export default Home
