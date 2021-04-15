import { Link } from "react-router-dom";

export default function Footer({ username, caption }) {
  return (
    <div className="p-4 pt-2 pb-0">
      <Link to={`/p/${username}`}>
        <span className="mr-1 font-bold hover:underline">{username}</span>
      </Link>
      <span className="text-gray-500 text-sm">{caption}</span>
    </div>
  );
}
