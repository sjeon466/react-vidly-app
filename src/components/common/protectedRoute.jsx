import React from "react";
import auth from "../../services/authService";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ path, component: Component, redner, ...rest }) => {
  return (
    <Route
      //path={path}
      {...rest}
      render={props => {
        if (!auth.getCurrentUser) return <Redirect to="/login" />;
        return Component ? <Component {...props} /> : redner(props);
      }}
    />
  );
};

export default ProtectedRoute;
