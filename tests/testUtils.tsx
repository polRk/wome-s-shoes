import { render, RenderResult } from '@testing-library/react'
import React from 'react'

const Providers: React.FC = ({ children }) => {
  return <>{children}</>
}

const customRender = (ui: React.ReactElement, options = {}): RenderResult => {
  return render(ui, { wrapper: Providers, ...options })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
