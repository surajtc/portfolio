import Intro from "./components/Intro";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <>
      <div className="flex gap-x-12 flex-col md:flex-row">
        <Profile />
        <Intro />
      </div>
    </>
  );
}
