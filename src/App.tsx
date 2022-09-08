import { QueryClientProvider, QueryClient } from 'react-query'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { HomePage } from './components/Pages/Home.page'
import { ListPage } from './components/Pages/List.page'
import './App.css'
import { Header } from './components/UI/Header/Header'
import { useEffect } from 'react'

const queryClient = new QueryClient()

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/', { replace: true })
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="list/:season" element={<ListPage />} />
      </Routes>
    </QueryClientProvider>
  )
}
export default App
