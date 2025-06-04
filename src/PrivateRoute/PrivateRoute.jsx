import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  // console.log(location);
  // console.log(children);

  if (!user) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
