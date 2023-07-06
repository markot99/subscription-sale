import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import ContentArea from '../../Components/ContentArea/ContentArea'
import ProtectedRoute from '../../Components/ProtectedRoute/ProtectedRoute'
import { fetchSubscriptions } from '../../Store/Slices/Subscription/SubscriptionSlice'
import { AppDispatch } from '../../Store/Store'
import Checkout from '../Checkout/Checkout'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Me from '../Me/Me'
import Register from '../Register/Register'
import Configurator from './../Configurator/Configurator'
import Header from './../Header/Header'
import './App.css'

function App() {
  const dispatch = useDispatch() as AppDispatch
  dispatch(fetchSubscriptions())

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
          <Route path='/checkout' element={<Checkout />} />
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
      <Footer />
    </>
  )
}

export default App
