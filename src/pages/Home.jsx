import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";
import Video from "../components/home/Video";

const Home = () => {
  return (
    <div className="relative">
      <div className="w-screen h-screen fixed">
        <Video />
      </div>
      <div className="w-screen h-screen relative flex flex-col justify-between items-center py-2">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
