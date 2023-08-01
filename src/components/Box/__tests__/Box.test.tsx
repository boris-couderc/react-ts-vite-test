import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'

import Box from '../Box'

describe('Box', () => {
  it('should have children', () => {
    const fakeChildren = 'Lorem ipsum'
    const { getByText, debug } = render(<Box>{fakeChildren}</Box>)
    debug()
    expect(getByText(fakeChildren)).toBeInTheDocument()
  })
})
