import { renderAdapter } from '../../utils/test-helpers'
import Button from '.'

describe('<Button />', () => {
  test('should render correctly', async () => {
    const { container } = renderAdapter(<Button label="Simple button" />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
