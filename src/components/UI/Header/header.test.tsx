/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render, screen } from '@testing-library/react'
import { Header } from './Header'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import configureStore from 'redux-mock-store'
import Season from './UI/Season'
import { act } from 'react-dom/test-utils'
import Driver from './UI/Driver'
import user from '@testing-library/user-event'
import Spinner from '../spinner/spinner'

describe('Render Header Text', () => {
  const initialState = { output: 10 }
  const mockStore = configureStore()
  let store
  beforeEach(() => {
    store = mockStore(initialState)
    render(
      //@ts-ignore
      <Provider store={store}>
        <QueryClientProvider client={new QueryClient()}>
          <Router>
            <Header />
          </Router>
        </QueryClientProvider>
      </Provider>
    )
  })

  test('Header renders correctly', () => {
    expect(screen.getByText('F1')).not.toBeNull()
  })

  test('Navigate Home', async () => {
    user.setup()
    const homeNavigation = screen.getByTestId('home')
    await user.click(homeNavigation)
    expect(screen.getByText('F1')).not.toBeNull()
  })
})

describe('Render Season Header', () => {
  const initialState = { output: 10 }
  const mockStore = configureStore()
  let store

  test('Renders Season', () => {
    act(() => {
      const driverCode = { season: '' }
      store = mockStore(initialState)
      render(
        //@ts-ignore
        <Provider store={store}>
          <QueryClientProvider client={new QueryClient()}>
            <Router>
              <Season driverCode={driverCode} />
            </Router>
          </QueryClientProvider>
        </Provider>
      )
    })
    expect(screen.getByText('Champions 2005 - 2021')).toBeInTheDocument()
    act(() => {
      const driverCode = { season: '2005' }
      store = mockStore(initialState)
      render(
        //@ts-ignore
        <Provider store={store}>
          <QueryClientProvider client={new QueryClient()}>
            <Router>
              <Season driverCode={driverCode} />
            </Router>
          </QueryClientProvider>
        </Provider>
      )
    })
    expect(screen.getByText('Season - 2005')).toBeInTheDocument()
  })
})

describe('Render Driver Header', () => {
  const initialState = { output: 10 }
  const mockStore = configureStore()
  let store

  test('Renders Season', () => {
    act(() => {
      const driverCode = {
        driver: 'ALO',
        nationality: 'SPN',
        wins: '7',
        points: '133',
      }
      store = mockStore(initialState)
      render(
        //@ts-ignore

        //@ts-ignore
        <Provider store={store}>
          <QueryClientProvider client={new QueryClient()}>
            <Router>
              <Driver driverCode={driverCode} />
            </Router>
          </QueryClientProvider>
        </Provider>
      )
    })
    expect(screen.getByText('ALO')).toBeInTheDocument()
    expect(screen.getByText('SPN')).toBeInTheDocument()
    expect(screen.getByText('7 Wins & 133 Points')).toBeInTheDocument()
  })
})

describe('Render Spinner', () => {
  const initialState = { output: 10 }
  const mockStore = configureStore()
  let store

  test('Renders Spinner', () => {
    act(() => {
      const isLoading = true
      store = mockStore(initialState)
      render(
        //@ts-ignore

        //@ts-ignore
        <Provider store={store}>
          <QueryClientProvider client={new QueryClient()}>
            <Router>
              <Spinner isLoading={isLoading} />
            </Router>
          </QueryClientProvider>
        </Provider>
      )
    })
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})
