import { useEffect } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar/sidebar";
import Timeline from "../components/timeline";
import LoggedInUserContext from "../context/logged-in-user-context";
import useUser from "../hooks/use-user";

export default function Dashboard() {
  const { user, setUser } = useUser();

  useEffect(() => {
    document.title = "Insta Clone";
  }, []);

  return (
    <LoggedInUserContext.Provider value={{ user, setUser }}>
      <div className="bg-gray-background">
        <Header />
        <div className="container max-w-screen-lg mx-auto px-5">
          <div className="grid grid-cols-3 gap-4 justify-between">
            <Timeline />
            <Sidebar />
          </div>
        </div>
      </div>
    </LoggedInUserContext.Provider>
  );
}
