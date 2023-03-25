import Intro from "./components/Intro";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <>
      <div className="flex gap-x-8 flex-col md:flex-row">
        <Profile />
        <Intro />
      </div>
    </>
  );
}
