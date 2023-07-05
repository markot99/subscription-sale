import { Route, Routes } from 'react-router-dom'
import ContentArea from '../../Components/ContentArea/ContentArea'
import ProtectedRoute from '../../Components/ProtectedRoute/ProtectedRoute'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Me from '../Me/Me'
import Register from '../Register/Register'
import Configurator from './../Configurator/Configurator'
import Header from './../Header/Header'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <ContentArea>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/configurator/:newspaper' element={<Configurator />} />
          {/* <Route path='/me' element={<Me />} /> */}
          <Route
            path='/me'
            element={
              <ProtectedRoute>
                <Me />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ContentArea>
    </>
  )
}

export default App
