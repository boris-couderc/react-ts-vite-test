import { Box, Button, Heading } from '~/components'
import { IconAdd } from '~/icons'

const Card = () => {
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

export default Card
