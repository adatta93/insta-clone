import { formatDistance } from "date-fns";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddComment from "./add-comment";

export default function Comments({
  docId,
  allComments,
  datePosted,
  commentInput,
}) {
  let latestOnTopComments = [...allComments].reverse();
  const [comments, setComments] = useState(latestOnTopComments);
  return (
    <>
      <div className="p-4 pt-1">
        {comments.length >= 3 && (
          <p className="text-sm text-gray-base mb-1 cursor-pointer">
            View all {comments.length} comments
          </p>
        )}
        {comments.slice(0, 3).map((item) => (
          <p key={`${item.displayName}-${item.comment}`} className="mb-1">
            <Link to={`/p/${item.displayName}`}>
              <span className="mr-1 font-bold hover:underline">
                {item.displayName}
              </span>
            </Link>
            <span className="text-gray-500 text-sm">{item.comment}</span>
          </p>
        ))}
        <p className="text-gray-base text-xs uppercase mt-2">
          {formatDistance(datePosted, new Date())} ago
        </p>
      </div>
      <AddComment
        docId={docId}
        comments={comments}
        setComments={setComments}
        commentInput={commentInput}
      />
    </>
  );
}
