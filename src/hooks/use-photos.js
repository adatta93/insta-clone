import { useContext, useEffect, useState } from "react";
import LoggedInUserContext from "../context/logged-in-user-context";
import { getPhotosForTimeline } from "../services/firebase-services";

export default function usePhotos() {
  const [photos, setPhotos] = useState(null);
  const { user: { userId = "", following } = {} } = useContext(
    LoggedInUserContext
  );

  useEffect(() => {
    async function getTimelinePhotos() {
      let followedUserPhotos = [];
      if (following.length > 0) {
        followedUserPhotos = await getPhotosForTimeline(userId, following);
      }
      followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    }
    if (userId) getTimelinePhotos();
  }, [userId, following]);

  return { photos };
}
