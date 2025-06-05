import { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/Context";
import Loading from "../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = use(AuthContext);
  // console.log(location);
  // console.log(children);
  if (loading) {
    return <Loading></Loading>
  }

  if (!user) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
