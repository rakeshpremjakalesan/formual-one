import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Spinner from './components/UI/spinner/spinner'
import { BrowserRouter } from 'react-router-dom'

const MainComponent = React.lazy(() => import('./main/main'))

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense
        fallback={
          <div>
            <Spinner isLoading={true} />
          </div>
        }
      >
        <MainComponent />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)
