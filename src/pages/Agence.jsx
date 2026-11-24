import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);
import image1 from "../../public/photos/1.jpg";
import image2 from "../../public/photos/2.jpg";
import image3 from "../../public/photos/3.jpg";
import image4 from "../../public/photos/4.jpg";
import image5 from "../../public/photos/5.jpg";
import image6 from "../../public/photos/6.jpg";
import image7 from "../../public/photos/7.jpg";
import image8 from "../../public/photos/8.jpg";

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: imageDivRef.current,
        start: "top 20%",
        end: "+=600",
        markers: true,
        scrub: 1,
        pin: true,
        pinSpacing: true,

        onUpdate: (self) => {
          let imageIndex = Math.min(
            Math.floor(self.progress * imageArray.length),
            imageArray.length - 1,
          );

          imageRef.current.src = imageArray[imageIndex];
        },
      });
    },
    { scope: imageDivRef },
  );

  return (
    <div>
      <div className=" section1 relative  py-1">
        <div ref={imageDivRef} className=" absolute top-50 left-[29vw]">
          <img
            ref={imageRef}
            className="h-[20vw] w-[15vw] rounded-3xl object-cover"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt=""
          />
        </div>
        <div className="font-[font1] mt-70 relative w-full">
          <div className="w-full">
            <h1 className="text-[20vw]  leading-none uppercase text-center">
              Seven7y <br />
              Two
            </h1>
          </div>
        </div>
        <div className="pl-[40%]">
          <p className="text-6xl">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; We're inquisitive and open-minded, and we make sure
            creativity crowds out ego from every corner. A brand is a living
            thing, with values, a personality and a story. If we ignore that, we
            can distance. We bring that perspective to every brand story we help
            tell.
          </p>
        </div>
      </div>
      <div className="section2"></div>
    </div>
  );
};

export default Agence;
