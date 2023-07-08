import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RouteProps, useLocation, useNavigate } from 'react-router-dom'
import { isAuthenticated } from '../../Store/Slices/Auth/AuthSlice'

const ProtectedRoute = ({ children }: RouteProps) => {
  const navigate = useNavigate()
  const location = useLocation()

  const isAllowed = useSelector(isAuthenticated)

  useEffect(() => {
    if (!isAllowed) {
      console.warn('Not allowed to access this route: ' + location)
      navigate('/')
    }
  }, [isAllowed])

  return <>{children}</>
}

export default ProtectedRoute
