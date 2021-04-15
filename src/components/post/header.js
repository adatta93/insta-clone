import { Link } from "react-router-dom";
import UserImage from "../user-image";

export default function Header({ username }) {
  return (
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
      <div className="flex items-center">
        <Link to={`/p/${username}`} className="flex items-center">
          <UserImage
            username={username}
            className="rounded-full h-8 w-8 flex mr-3"
          />
          <p className="font-bold  hover:underline">{username}</p>
        </Link>
      </div>
    </div>
  );
}
