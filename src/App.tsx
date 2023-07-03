import { Route, Routes } from 'react-router-dom'
import './App.css'
import Configurator from './features/Configurator/Configurator'
import Header from './features/Header/Header'
import { PrivateRoute } from './features/PrivateRoute/PrivateRoute'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<p>App</p>} />
        <Route path='/configurator/:newspaper' element={<Configurator />} />
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
