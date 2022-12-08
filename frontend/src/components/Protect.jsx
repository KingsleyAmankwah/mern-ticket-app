import { useSelector } from "react-redux";
import { selectUser } from "../features/auth/authSlice";

export const Admin = ({ children }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  if (user?.isAdmin === true || user?.isStaff === true) {
    return <>{children}</>;
  }
  return null;
};
