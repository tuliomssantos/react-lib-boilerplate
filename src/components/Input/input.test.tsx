import React from 'react'

import { renderAdapter } from '../../utils/test-helpers'

import Input from '.'

describe('<Input />', () => {
  test('should render correctly', async () => {
    const { container } = renderAdapter(<Input placeholder="rendered" />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
