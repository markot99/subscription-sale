import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RouteProps, useNavigate } from 'react-router-dom'
import { isAuthenticated } from '../../Store/Slices/Auth/AuthSlice'

const ProtectedRoute = ({ children }: RouteProps) => {
  const navigate = useNavigate()
  const isAllowed = useSelector(isAuthenticated)

  useEffect(() => {
    if (!isAllowed) {
      navigate('/')
    }
  }, [isAllowed])

  return <>{children}</>
}

export default ProtectedRoute
