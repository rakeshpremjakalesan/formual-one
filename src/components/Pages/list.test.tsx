/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render, screen } from '@testing-library/react'
import { ListPage } from './List.page'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { act } from 'react-dom/test-utils'

describe('Render Season Header', () => {
  const initialState = { output: 10 }
  const mockStore = configureStore()
  let store

  test('Renders Season', () => {
    act(() => {
      store = mockStore(initialState)
      render(
        //@ts-ignore
        <Provider store={store}>
          <QueryClientProvider client={new QueryClient()}>
            <Router>
              <ListPage />
            </Router>
          </QueryClientProvider>
        </Provider>
      )
    })
    //expect(screen.getByText('Loading')).toBeInTheDocument()
  })
})
