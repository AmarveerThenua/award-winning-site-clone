
import homeVideo from "../../assets/videos/home.mp4";

const Video = ({ variant = "background" }) => {
  if (variant === "inline") {
    return (
      <span className="inline-block h-full aspect-video overflow-hidden rounded-full align-middle">
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

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <video
        className="w-full h-full object-cover pointer-events-none"
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
