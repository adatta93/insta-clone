import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { getSuggestedUsersFromFirebase } from "../../services/firebase-services";
import SuggestedProfile from "./suggested-profiles";

export default function Suggestion({ userId, following, docId }) {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function getSuggestedUsers() {
      const result = await getSuggestedUsersFromFirebase(userId, following);
      setProfiles(result || []);
    }
    if (userId) {
      getSuggestedUsers();
    }
  }, [userId, following]);

  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="rounded flex flex-col">
      <div className="flex items-center justify-between text-sm mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
      <div className="mt-4 grid gap-4">
        {profiles.map((prof) => (
          <SuggestedProfile
            key={prof.userId}
            profileDocId={prof.docId}
            profileId={prof.userId}
            profUsername={prof.username}
            userId={userId}
            userDocId={docId}
          />
        ))}
      </div>
    </div>
  ) : null;
}
