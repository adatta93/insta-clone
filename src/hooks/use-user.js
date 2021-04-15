import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user-context";
import { getUserObjByUserId } from "../services/firebase-services";

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserByUserId() {
      const [result] = await getUserObjByUserId(user.uid);
      setActiveUser(result || {});
    }
    if (user?.uid) {
      getUserByUserId();
    } else {
      setActiveUser({});
    }
  }, [user]);

  return { user: activeUser, setUser: setActiveUser };
}
