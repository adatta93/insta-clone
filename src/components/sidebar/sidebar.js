import { useContext } from "react";
import LoggedInUserContext from "../../context/logged-in-user-context";
import Suggestion from "./suggestion";
import User from "./user";

export default function Sidebar() {
  const {
    user: { username, fullName, userId, following, docId } = {},
  } = useContext(LoggedInUserContext);

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestion userId={userId} following={following} docId={docId} />
    </div>
  );
}
