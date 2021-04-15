import { useEffect } from "react";
import Header from "../components/header";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found! - Insta";
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-5xl">Page Not Found!</p>
      </div>
    </div>
  );
}
