import '@testing-library/jest-dom'

import { render, RenderResult } from '@testing-library/react'

export const renderAdapter = (ui: React.ReactElement): RenderResult => {
  return render(ui)
}
