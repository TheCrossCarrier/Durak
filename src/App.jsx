import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WebApp from '@twa-dev/sdk'
import Game from './views/Game/Game'
import GlobalStyle from './styles/GlobalStyle'

export default function App() {
  useEffect(() => {
    WebApp.ready()
  }, [])

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<h1>Error 404</h1>} />

          <Route
            path=':id'
            element={<Game user={WebApp.initDataUnsafe?.user} />}
          />
        </Routes>
      </Router>
    </>
  )
}
