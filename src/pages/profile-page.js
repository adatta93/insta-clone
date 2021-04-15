import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getUserByUsername } from "../services/firebase-services";
import * as ROUTES from "../constants/routes";
import Header from "../components/header";
import UserProfile from "../components/profile/user-profile";

export default function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    async function checkUserExist() {
      const userObj = await getUserByUsername(username);
      if (userObj.length > 0) {
        setUser(userObj[0]);
      } else {
        history.push(ROUTES.NOT_FOUND);
      }
    }
    checkUserExist();
  }, [username, history]);

  return user ? (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile user={user} />
      </div>
    </div>
  ) : null;
}
