import React from 'react'

import '@testing-library/jest-dom'

import { render, RenderResult } from '@testing-library/react'

global.React = React

export const renderAdapter = (ui: React.ReactElement): RenderResult => {
  return render(ui)
}
