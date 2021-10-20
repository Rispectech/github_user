import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading, isAuthenticated } = useAuth0();
  const isUser = user && isAuthenticated;
  console.log(isUser, user, isLoading, isAuthenticated);
  return (
    <Route {...rest}>{isUser ? children : <Redirect to="/login" />}</Route>
  );
};
export default PrivateRoute;
