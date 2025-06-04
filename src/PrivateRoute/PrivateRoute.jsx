
import { AuthContext } from "../context/Context";
import { Navigate, useLocation } from "react-router";
import UserAuth from "../hooks/UseAuth/UseAuth";

const PrivateRoute = ({children}) => {
  const { user } = UserAuth();
  const location = useLocation();
  // console.log(location);
  // console.log(children);

  if (!user) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
