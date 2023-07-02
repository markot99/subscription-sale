import { Navigate, RouteProps } from 'react-router-dom'

export function PrivateRoute({ children }: RouteProps): JSX.Element {
  return <>{true ? children : <Navigate to='/' />}</>
}
