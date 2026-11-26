
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";
import Video from "../components/home/Video";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background video - must not block clicks */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none">
        <Video />
      </div>

      {/* Home content */}
      <div className="relative z-10 w-screen min-h-screen flex flex-col justify-between items-center py-2">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
