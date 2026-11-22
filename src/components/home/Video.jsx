// components/home/Video.jsx
import homeVideo from "../../assets/videos/home.mp4";

const Video = ({ variant = "background" }) => {
  if (variant === "inline") {
    return (
      <span className="inline-block h-full aspect-video overflow-hidden rounded-full align-middle ">
        <video
          className="w-full h-full object-cover"
          loop
          autoPlay
          muted
          playsInline
          src={homeVideo}
        />
      </span>
    );
  }

  // fullscreen background variant (default)
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      <video
        className="w-full h-full object-cover"
        loop
        autoPlay
        muted
        playsInline
        src={homeVideo}
      />
    </div>
  );
};

export default Video;
