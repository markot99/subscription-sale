import { useSelector } from 'react-redux'
import { Navigate, RouteProps } from 'react-router-dom'
import { isLoggedIn } from '../../store/slices/user/userslice'

export function PrivateRoute({ children }: RouteProps): JSX.Element {
  return <>{useSelector(isLoggedIn) ? children : <Navigate to='/' />}</>
}
