import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  return user ? children : <Navigate to="/login" />;

  // if (user) return <>{Children}</>;
  // return <Navigate to="/login" />;
};

export const AdminRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  if (user?.role === "admin" || user?.role === "staff") {
    return <>{children}</>;
  }
};
// export default PrivateRoute;
