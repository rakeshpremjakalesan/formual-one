interface SpinnerProps {
  isLoading: boolean
}

export const spinnerService = {
  showSpinner: () => {
    const Loader =
      '<div class="backdrop" id="spinner"><div class="Load"><div class="loader">Loading...</div></div>'
    const Spin = document.getElementById('spinner')
    if (Spin === null || Spin.parentNode === null)
      document.body.insertAdjacentHTML('beforeend', Loader)
  },
  hideSpinner: () => {
    const Spin = document.getElementById('spinner')
    if (Spin != null && Spin.parentNode !== null) {
      Spin.parentNode.removeChild(Spin)
    }
  },
}

// SPINNER COMPONENT
const Spinner = (isLoading: SpinnerProps) => {
  if (isLoading.isLoading) {
    return (
      <div className="backdrop">
        <div className="Load">
          <div className="loader">Loading...</div>
        </div>
      </div>
    )
  } else {
    return <div className="App" style={{ display: 'none' }}></div>
  }
}

export default Spinner
