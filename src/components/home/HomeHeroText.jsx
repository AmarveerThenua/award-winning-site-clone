import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className=" text-white uppercase text-center font-[font1]">
      <div className="leading-[7vw] text-[8vw]">The spark for</div>
      <div className="leading-[7vw] text-[8vw] flex justify-center items-center gap-2">
        <span>all</span>
        <span className=" h-[7vw]  mb-4 rounded-full overflow-hidden inline-block">
          <Video variant="inline" />
        </span>
        <span>things</span>
      </div>
      <div className="leading-[7vw] text-[8vw]">creative</div>
    </div>
  );
};

export default HomeHeroText;
