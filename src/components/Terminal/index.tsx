import { lazy, Suspense } from 'react'

const Terminal = lazy(() => import('./Terminal'))

export const DynamicTerminal = () => (
  <Suspense fallback={null}>
    <Terminal />
  </Suspense>
)
