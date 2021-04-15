import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoggedInUserContext from "../../context/logged-in-user-context";
import {
  getUserObjByUserId,
  updateLoggedInUserFollowing,
  updateOtherUserFollowers,
} from "../../services/firebase-services";
import UserImage from "../user-image";

export default function SuggestedProfile({
  profileDocId,
  profileId,
  profUsername,
  userId,
  userDocId,
}) {
  const [followed, setFollowed] = useState(false);
  const { setUser } = useContext(LoggedInUserContext);

  async function handleFollowUser() {
    setFollowed(true);
    await updateLoggedInUserFollowing(userDocId, profileId, false);
    await updateOtherUserFollowers(profileDocId, userId, false);
    const [user] = await getUserObjByUserId(userId);
    setUser(user);
  }

  return !followed ? (
    <div className="flex items-center justify-between">
      <Link to={`/p/${profUsername}`}>
        <div className="flex items-center justify-between">
          <UserImage
            username={profUsername}
            className="flex rounded-full w-8 mr-3"
          />
          <p className="font-bold text-sm">{profUsername}</p>
        </div>
      </Link>
      <button
        className="text-xs text-blue-medium font-bold"
        type="button"
        onClick={handleFollowUser}>
        Follow
      </button>
    </div>
  ) : null;
}
