import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Spinner from '../UI/spinner/spinner'

interface ErrorBoundaryHOCProps {
  component: any
  componentName: string
}

const ErrorBoundaryHOC = ({
  component,
  componentName,
}: ErrorBoundaryHOCProps) => {
  const ErrorFallback = () => {
    return (
      <Suspense
        fallback={
          <div>
            <Spinner isLoading={true} />
          </div>
        }
      >
        <div>Error in {componentName}. Please try after sometime</div>
      </Suspense>
    )
  }

  return (
    <Suspense>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {component}
      </ErrorBoundary>
    </Suspense>
  )
}
export default ErrorBoundaryHOC
