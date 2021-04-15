import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExist(userName) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", userName)
    .get();
  return result.docs.length > 0;
}

export async function getUserObjByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
  return user;
}

export async function getUserByUsername(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
  return user;
}

export async function getSuggestedUsersFromFirebase(userId, following) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "not-in", [userId, ...following])
    .limit(10)
    .get();
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
  return user;
}

export async function updateLoggedInUserFollowing(
  userDocId,
  profileId,
  isFollowing
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(userDocId)
    .update({
      following: isFollowing
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId),
    });
}

export async function updateOtherUserFollowers(
  profileDocId,
  userId,
  isFollowing
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(profileDocId)
    .update({
      followers: isFollowing
        ? FieldValue.arrayRemove(userId)
        : FieldValue.arrayUnion(userId),
    });
}

export async function getPhotosForTimeline(userId, following) {
  const result = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "in", following)
    .get();

  const userFollowedPhotos = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id,
  }));

  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      let userLikedPhoto = false;
      if (photo.likes?.includes(userId)) {
        userLikedPhoto = true;
      }

      const [user] = await getUserObjByUserId(photo.userId);
      const { username } = user;

      return { username, ...photo, userLikedPhoto };
    })
  );
  return photosWithUserDetails;
}

export async function togglePhotoLike(docId, photoLike, userId) {
  return firebase
    .firestore()
    .collection("photos")
    .doc(docId)
    .update({
      likes: photoLike
        ? FieldValue.arrayRemove(userId)
        : FieldValue.arrayUnion(userId),
    });
}

export async function addNewComment(docId, displayName, comment) {
  return firebase
    .firestore()
    .collection("photos")
    .doc(docId)
    .update({
      comments: FieldValue.arrayUnion({ displayName, comment }),
    });
}

export async function getPhotosByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "==", userId)
    .get();

  return result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id,
  }));
}

export async function isUserFollowingProfile(loggedInUsername, profileUserId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", loggedInUsername)
    .where("following", "array-contains", profileUserId)
    .get();
  const [response = {}] = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id,
  }));
  return !!response.userId;
}
