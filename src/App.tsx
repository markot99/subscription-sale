import { Translation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import logo from './logo.svg'
import { PrivateRoute } from './features/PrivateRoute/PrivateRoute'

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <div className='App'>
            <header className='App-header'>
              <img src={logo} className='App-logo' alt='logo' />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <Translation>{(t) => <p>{t('description.part1')}</p>}</Translation>
              <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                Learn React
              </a>
            </header>
          </div>
        }
      />
      <Route path="/hello" element={<PrivateRoute><p>Hallo</p></PrivateRoute>} />
    </Routes>
  )
}

export default App
