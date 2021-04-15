import * as ROUTES from "../constants/routes";
import { Redirect, Route } from "react-router-dom";

export default function IsUserLggedIn({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!user) {
          return children;
        }
        if (user) {
          return (
            <Redirect
              to={{ pathname: ROUTES.DASHBOARD, state: { from: location } }}
            />
          );
        }
        return null;
      }}
    />
  );
}
