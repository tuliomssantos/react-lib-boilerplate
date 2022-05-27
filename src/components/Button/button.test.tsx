import { renderAdapter } from '../../utils/test-helpers'

import Button from '.'

describe('<Button />', () => {
  test('should render correctly', async () => {
    const { container } = renderAdapter(<Button>Simple button</Button>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
