import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Stairs = ({ children }) => {
  const currentPath = useLocation().pathname;
  const stairsParentRef = useRef(null);
  const appFile = useRef(null);
  useGSAP(
    function () {
      let tl = gsap.timeline();
      tl.to(stairsParentRef.current, {
        display: "block",
      });
      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.15,
        },
      });

      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.15,
        },
      });
      tl.set(stairsParentRef.current, {
        display: "none",
      });
      tl.to(".stair", {
        y: "0%",
      });

      gsap.from(appFile.current, {
        opacity: 0,
        duration: 0.5,
        delay: 1.3,
      });
    },
    [currentPath],
  );
  return (
    <>
      <div ref={stairsParentRef} className="h-screen w-full  fixed z-100 top-0">
        <div className="h-full w-full flex">
          <div className=" stair h-full w-1/5 bg-black "></div>
          <div className=" stair h-full w-1/5 bg-black "></div>
          <div className=" stair h-full w-1/5 bg-black "></div>
          <div className=" stair h-full w-1/5 bg-black "></div>
          <div className=" stair h-full w-1/5 bg-black "></div>
        </div>
      </div>
      <div ref={appFile}>{children}</div>
    </>
  );
};

export default Stairs;
