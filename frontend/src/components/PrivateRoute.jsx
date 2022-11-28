import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ Children }) => {
  const { user } = useSelector((state) => state.auth);

  if (user) return Children;

  return <Navigate to="/login" />;
};

export default PrivateRoute;
