import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ loggedIn, children }) => {
  if (!loggedIn) {
    return <Navigate to="/sign-in" />
  }
  return children ? children : <Outlet />
};

export default ProtectedRoute;