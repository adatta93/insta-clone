import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import FirebaseContext from "../context/firebase-context";
import * as ROUTES from "../constants/routes";

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = email === "" || password === "";

  const handleLogin = async (ev) => {
    ev.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmail("");
      setPassword("");
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = "Login - Insta";
  }, []);

  return (
    <div className="container flex items-center max-w-screen-md mx-auto mt-8 h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="IPhone Login" />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center p-4 border border-gray-primary rounded mb-4">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="Insta"
              className="w-6/12 mt-2 mb-4"
            />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mb-2 py-5 px-4 h-2 border border-gray-primary rounded"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mb-2 py-5 px-4 h-2 border border-gray-primary rounded"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <button
              type="submit"
              className="bg-blue-medium hover:bg-blue-mediumHover disabled:bg-blue-medium disabled:opacity-50 disabled:cursor-default text-white font-bold w-full rounded h-12"
              disabled={isInvalid}>
              Log In
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full p-4 border border-gray-primary rounded">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to={ROUTES.SIGNUP} className="font-bold text-blue-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
