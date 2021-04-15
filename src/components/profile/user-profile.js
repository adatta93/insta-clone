import { useEffect, useReducer } from "react";
import { getPhotosByUserId } from "../../services/firebase-services";
import Header from "./header";
import Photos from "./photos";

export default function UserProfile({ user }) {
  const initialState = {
    profile: {},
    photosCollection: [],
    followerCount: 0,
  };
  const reducer = (state, newState) => ({ ...state, ...newState });

  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getProfileAndPhotos() {
      const photos = await getPhotosByUserId(user.userId);

      dispatch({
        profile: user,
        photosCollection: photos,
        followerCount: user.followers.length,
      });
    }

    getProfileAndPhotos();
  }, [user]);

  return (
    <>
      <Header
        profile={profile}
        photosCount={photosCollection ? photosCollection.length : 0}
        followerCount={followerCount}
        setFollowerCount={dispatch}
      />
      <Photos photos={photosCollection} />
    </>
  );
}
