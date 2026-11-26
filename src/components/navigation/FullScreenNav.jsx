import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useContext } from "react";
import { NavBarContext } from "../../context/NavContext";
const FullScreenNav = () => {
  const [navOpen, setNavOpen] = useContext(NavBarContext);
  const stairsRef = useRef(null);
  const navLinkRef = useRef(null);
  useGSAP(() => {
    const stairs = stairsRef.current.children;
    const nav = document.querySelector("#full-screen-nav");

    if (navOpen) {
      gsap.set(nav, {
        display: "block",
      });

      gsap.set(stairs, {
        yPercent: -100,
      });

      gsap.set(".navLinks", {
        yPercent: -100,
      });

      const tl = gsap.timeline();

      tl.to(stairs, {
        yPercent: 0,
        duration: 0.8,
        stagger: {
          amount: 0.25,
        },
        ease: "power3.out",
      });

      /
      tl.to(
        ".navLinks",
        {
          yPercent: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3",
      );


      tl.from(
        navLinkRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power4.out",
        },
        "-=0.2",
      );
    } else {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(nav, {
            display: "none",
          });
        },
      });

      tl.to(".navLinks", {
        yPercent: -100,
        duration: 0.5,
        ease: "power3.in",
      });


      tl.to(stairs, {
        yPercent: -100,
        duration: 0.7,
        stagger: {
          amount: 0.25,
        },
        ease: "power3.in",
      });
    }
  }, [navOpen]);
  return (
    <div
      id="full-screen-nav"
      style={{ display: "none" }}
      className="min-h-screen w-full text-white py-1 overflow-x-hidden z-[100] absolute inset-0 overflow-hidden"
    >
      <div>
        <div ref={stairsRef} className=" absolute inset-0 stairs  w-full flex ">
          <div className=" stair h-full w-1/5 bg-black "></div>
          <div className=" stair h-full w-1/5 bg-black "></div>
          <div className=" stair h-full w-1/5 bg-black "></div>
          <div className=" stair h-full w-1/5 bg-black "></div>
          <div className=" stair h-full w-1/5 bg-black "></div>
        </div>
      </div>
      <div>
        <div className="w-full  flex justify-between navLinks">
          <div className="py-2 px-3 w-fit z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="44"
              fill="white"
              viewBox="0 0 103 44"
            >
              <path
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className=" h-20 w-32 p-1 relative cursor-pointer"
          >
            <div className="absolute top-1/2 left-1/2 border bg-[#D3FD50] w-1 h-full -rotate-45 -translate-x-1/2 -translate-y-1/2 origin-center" />
            <div className="absolute top-1/2 left-1/2 border bg-[#D3FD50] w-1 h-full rotate-45 -translate-x-1/2 -translate-y-1/2 origin-center" />
          </div>
        </div>
        <div id="links" className="w-full mt-8">
          <div ref={navLinkRef} className="link w-full py-1">
            <div className="moveX relative w-full  flex justify-center items-center border-t border-white">
              <h1 className="font-[font2] text-[6vw]">Project</h1>

              <div className="linksMove absolute flex items-center gap-3 bg-[#D3FD50] text-black font-[font2] uppercase">
                {/* First set */}
                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>

                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />

                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>

                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />

                {/* Duplicate set */}
                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>

                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />

                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>

                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
            </div>
            <div className="moveX relative w-full  flex justify-center items-center border-t border-white">
              <h1 className="font-[font2] text-[6vw]">Agence</h1>

              <div className="linksMove absolute flex items-center gap-3 bg-[#D3FD50] text-black font-[font2] uppercase">
                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>
                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />

                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>
                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>
                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>
                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
            </div>
            <div className="moveX relative w-full  flex justify-center items-center border-t border-white">
              <h1 className="font-[font2] text-[6vw]">Contact</h1>

              <div className="linksMove absolute flex items-center gap-3 bg-[#D3FD50] text-black font-[font2] uppercase">
                {/* First set */}
                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>

                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />

                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>

                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />

                {/* Duplicate set */}
                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>

                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />

                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>

                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
            </div>
            <div className="moveX relative w-full  flex justify-center items-center border-y border-white">
              <h1 className="font-[font2] text-[6vw]">Contact</h1>

              <div className="linksMove absolute flex items-center gap-3 bg-[#D3FD50] text-black font-[font2] uppercase">
                {/* First set */}
                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>

                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />

                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>

                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />

                {/* Duplicate set */}
                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>

                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />

                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>

                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
              <div className="linksMove absolute flex items-center gap-3 bg-[#D3FD50] text-black font-[font2] uppercase">
                {/* First set */}
                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>

                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />

                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>

                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />

                {/* Duplicate set */}
                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>

                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />

                <h2 className="text-[6vw] whitespace-nowrap">
                  Pour Tout savoir
                </h2>

                <img
                  className="h-[5vw] w-60 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
