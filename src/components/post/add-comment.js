import { useContext, useState } from "react";
import UserContext from "../../context/user-context";
import { addNewComment } from "../../services/firebase-services";

export default function AddComment({
  docId,
  comments,
  setComments,
  commentInput,
}) {
  const [comment, setComment] = useState("");
  const {
    user: { displayName },
  } = useContext(UserContext);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setComments([{ displayName, comment }, ...comments]);
    setComment("");

    await addNewComment(docId, displayName, comment);
  };

  return (
    <div className="border-t border-gray-primary">
      <form className="flex justify-between pl-0 pr-5" onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          name="add-comment"
          placeholder="Add a comment"
          className="text-sm text-gray-base w-full mr-3 py-5 px-4"
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          ref={commentInput}
        />
        <button
          className={`text-sm font-bold text-blue-medium ${
            comment.length <= 1 && "opacity-25"
          }`}
          disabled={comment.length <= 1}>
          POST
        </button>
      </form>
    </div>
  );
}
