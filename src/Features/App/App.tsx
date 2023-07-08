import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from '../../Components/ProtectedRoute/ProtectedRoute'
import AlertBox from '../AlertBox/AlertBox'
import Checkout from '../Checkout/Checkout'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Me from '../Me/Me'
import Register from '../Register/Register'
import Configurator from './../Configurator/Configurator'
import Header from './../Header/Header'

function App() {
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Header />
      <AlertBox />
      <Box
        sx={{
          width: 1,
          flexGrow: 1,
          padding: { xs: 1, sm: 5 }
        }}
      >
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/configurator' element={<Configurator />} />
          <Route
            path='/checkout'
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path='/me'
            element={
              <ProtectedRoute>
                <Me />
              </ProtectedRoute>
            }
          />
          <Route path='/' element={<Home />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
