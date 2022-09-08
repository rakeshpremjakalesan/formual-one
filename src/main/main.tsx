import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import Spinner from '../components/UI/spinner/spinner'
import { configureStore } from '../redux/ConfigureStore'

const App = React.lazy(() => import('../App'))
const ErrorBoundaryWrapper = React.lazy(
  () => import('../components/HOC/ErrorBoundaryWrapper')
)

const store = configureStore()

export function returnStore(): any {
  return {
    storeComponent: store,
    storeStates: store.getState(),
  }
}

interface SuspenseHOCProps {
  component: any
  name: any
}

export const suspenseWrapper = ({ component, name }: SuspenseHOCProps) => {
  return (
    <Suspense
      fallback={
        <div>
          <Spinner isLoading={true} />
        </div>
      }
    >
      <ErrorBoundaryWrapper component={component} componentName={name} />
    </Suspense>
  )
}

const APPComponent = (
  <Suspense
    fallback={
      <div>
        <Spinner isLoading={true} />
      </div>
    }
  >
    <App />
  </Suspense>
)
const APP: React.FC = () => {
  return (
    <Provider store={store}>
      {suspenseWrapper({ component: APPComponent, name: 'App.tsx' })}
    </Provider>
  )
}

export default APP
