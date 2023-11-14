import { Route, Navigate } from "react-router-dom";

const PrivateRoutes = ({ children, ...rest }) => {
  let auth = false;
  return (
    <Route {...rest}>
      {auth ? <Navigate replace to="/login" /> : children}
    </Route>
  );
};

export default PrivateRoutes;
