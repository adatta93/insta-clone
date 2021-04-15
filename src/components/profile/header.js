import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import useUser from "../../hooks/use-user";
import {
  isUserFollowingProfile,
  updateLoggedInUserFollowing,
  updateOtherUserFollowers,
} from "../../services/firebase-services";
import UserImage from "../user-image";

export default function Header({
  profile,
  photosCount,
  followerCount,
  setFollowerCount,
}) {
  const { user } = useUser();

  const [isFollowingProfile, setIsFollowingProfile] = useState(false);
  const activeFollowBtn =
    user && user.username && user.username !== profile.username;

  const handleToggleFollow = async () => {
    setIsFollowingProfile((prevState) => !prevState);
    setFollowerCount({
      followerCount: isFollowingProfile ? followerCount - 1 : followerCount + 1,
    });

    await updateLoggedInUserFollowing(
      user.docId,
      profile.userId,
      isFollowingProfile
    );
    await updateOtherUserFollowers(
      profile.docId,
      user.userId,
      isFollowingProfile
    );
  };

  useEffect(() => {
    const isLoggedInUserFollowingProfile = async () => {
      const isFollowing = await isUserFollowingProfile(
        user.username,
        profile.userId
      );
      setIsFollowingProfile(isFollowing);
    };
    if (user?.username && profile?.userId) {
      isLoggedInUserFollowingProfile();
    }
  }, [user.username, profile.userId]);

  return (
    <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
      <div className="container flex justify-center">
        {profile?.username ? (
          <UserImage
            username={profile.username}
            className="rounded-full h-40 w-40 flex"
          />
        ) : (
          <Skeleton circle={true} height={160} width={160} />
        )}
      </div>
      <div className="flex items-center justify-center flex-col col-span-2">
        <div className="container flex items-center">
          {profile.username ? (
            <p className="text-2xl mr-4">{profile.username}</p>
          ) : (
            <Skeleton width={180} className="mr-3" />
          )}
          {user && Object.keys(user).length === 0 ? null : user?.username &&
            profile?.username ? (
            activeFollowBtn && (
              <button
                className="bg-blue-medium font-bold text-white text-sm rounded w-20 h-8"
                onClick={handleToggleFollow}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleToggleFollow();
                  }
                }}>
                {isFollowingProfile ? "Unfollow" : "Follow"}
              </button>
            )
          ) : (
            <Skeleton width={90} height={42} />
          )}
        </div>
        <div className="container flex mt-4">
          {profile?.followers && profile?.following ? (
            <>
              <p className="mr-10">
                <span className="font-bold">{photosCount}</span> photos
              </p>
              <p className="mr-10">
                <span className="font-bold">{followerCount}</span>{" "}
                {followerCount <= 1 ? "follower" : "followers"}
              </p>
              <p className="mr-10">
                <span className="font-bold">{profile.following.length}</span>{" "}
                following
              </p>
            </>
          ) : (
            <div className="container">
              <Skeleton height={24} />
            </div>
          )}
        </div>
        <div className="container mt-4">
          <p className="font-medium">
            {profile?.fullName ? profile.fullName : <Skeleton height={24} />}
          </p>
        </div>
      </div>
    </div>
  );
}
