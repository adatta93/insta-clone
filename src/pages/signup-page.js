import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import FirebaseContext from "../context/firebase-context";
import * as ROUTES from "../constants/routes";
import { doesUsernameExist } from "../services/firebase-services";

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = email === "" || password === "";

  const handleSignUp = async (ev) => {
    ev.preventDefault();
    const result = await doesUsernameExist(userName);
    if (!result) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);

        await createdUserResult.user.updateProfile({
          displayName: userName,
        });

        await firebase.firestore().collection("users").add({
          userId: createdUserResult.user.uid,
          username: userName.toLowerCase(),
          fullName,
          emailAddress: email.toLowerCase(), //anik@123
          following: [],
          followers: [],
          dateCreated: Date.now(),
        });

        history.push(ROUTES.DASHBOARD);
      } catch (error) {
        setUserName("");
        setFullName("");
        setEmail("");
        setPassword("");
        setError(error.message);
      }
    } else {
      setError("User with same username already exist!");
    }
  };

  useEffect(() => {
    document.title = "Sign Up - Insta";
  }, []);

  return (
    <div className="container flex items-center max-w-screen-md mx-auto mt-8 h-screen">
      <div className="flex flex-col w-6/12 mx-auto">
        <div className="flex flex-col items-center p-4 border border-gray-primary rounded mb-4">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="Insta"
              className="w-6/12 mt-2 mb-4"
            />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
          <form onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Username"
              className="text-sm text-gray-base w-full mb-2 py-5 px-4 h-2 border border-gray-primary rounded"
              value={userName}
              onChange={({ target }) => setUserName(target.value)}
            />
            <input
              type="text"
              placeholder="Full Name"
              className="text-sm text-gray-base w-full mb-2 py-5 px-4 h-2 border border-gray-primary rounded"
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
            />
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
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full p-4 border border-gray-primary rounded">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
