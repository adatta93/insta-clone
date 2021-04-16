import { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import useAuthListener from "./hooks/use-auth-listener";
import UserContext from "./context/user-context";
import ProtectedRoute from "./helpers/protected.route";
import IsUserLggedIn from "./helpers/is-user-logged-in";

const Login = lazy(() => import("./pages/login-page"));
const SignUp = lazy(() => import("./pages/signup-page"));
const Dashboard = lazy(() => import("./pages/dashboard-page"));
const Profile = lazy(() => import("./pages/profile-page"));
const NotFound = lazy(() => import("./pages/not-found-page"));

function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <IsUserLggedIn user={user} path={ROUTES.LOGIN}>
              <Login />
            </IsUserLggedIn>
            <IsUserLggedIn user={user} path={ROUTES.SIGNUP}>
              <SignUp />
            </IsUserLggedIn>
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute>
            <Route path={ROUTES.PROFILE} component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
