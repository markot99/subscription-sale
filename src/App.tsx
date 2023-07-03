import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './features/Header/Header'
import { PrivateRoute } from './features/PrivateRoute/PrivateRoute'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<p>App</p>} />
        <Route
          path='/hello'
          element={
            <PrivateRoute>
              <p>Hallo</p>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
