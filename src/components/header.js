import { useContext } from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "../context/firebase-context";
import UserContext from "../context/user-context";
import * as ROUTES from "../constants/routes";
import Skeleton from "react-loading-skeleton";
import UserImage from "./user-image";

export default function Header() {
  const { user } = useContext(UserContext);
  const { firebase } = useContext(FirebaseContext);

  return (
    <header className="h-16 bg-white border-b border-gray-primary mb-8">
      <div className="container max-w-screen-lg mx-auto px-5 h-full">
        <div className="flex justify-between h-full">
          <div className="flex items-center text-gray-700 text-center">
            {/* <Link to={ROUTES.DASHBOARD} className="w-6/12">
              <img src="/images/logo.png" alt="Insta" className="mt-2" />
            </Link> */}
            <Link to={ROUTES.DASHBOARD} className="w-12/12">
              <span className="mt-2 text-black-light font-medium text-xl">
                Insta Clone
              </span>
            </Link>
          </div>
          <div className="flex items-center text-gray-700 text-center">
            {user ? (
              <>
                <Link to={ROUTES.DASHBOARD}>
                  <svg
                    className="w-8 mr-6 text-black-light"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                </Link>
                <button
                  type="button"
                  title="Log Out"
                  onClick={() => firebase.auth().signOut()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      firebase.auth().signOut();
                    }
                  }}>
                  <svg
                    className="w-8 mr-6 text-black-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                  </svg>
                </button>
                <div className="flex items-center">
                  {user.displayName ? (
                    <Link to={`/p/${user.displayName.toLowerCase()}`}>
                      <UserImage
                        username={user.displayName}
                        className="w-8 h-8 rounded-full"
                      />
                    </Link>
                  ) : (
                    <Skeleton circle={true} height={32} width={32} />
                  )}
                </div>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN} className="mr-4">
                  <button
                    type="button"
                    tabIndex="-1"
                    className="bg-blue-medium hover:bg-blue-mediumHover font-bold text-sm text-white rounded w-20 h-8">
                    Log In
                  </button>
                </Link>
                <Link to={ROUTES.SIGNUP} className="mr-4">
                  <button
                    type="button"
                    tabIndex="-1"
                    className="text-blue-medium hover:text-white hover:bg-blue-medium font-bold text-sm border border-blue-medium rounded w-20 h-8">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
