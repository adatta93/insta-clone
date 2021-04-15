import { useContext, useEffect, useState } from "react";
import FirebaseContext from "../context/firebase-context";

export default function useAuthListener() {
  const [user, setUser] = useState(localStorage.getItem("authUserInsta"));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    let listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUserInsta", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUserInsta");
        setUser(null);
      }
    });

    return () => listener();
  });

  return { user };
}
