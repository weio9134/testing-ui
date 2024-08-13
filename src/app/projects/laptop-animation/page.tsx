"use client";
import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import "./laptop.css";

const page = () => {
  const [hidden, setHidden] = useState(true);

  useGSAP(() => {
    setHidden(false);
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline()
      .from("#header", {
        autoAlpha: 0,
        x: "-100%",
        duration: 0.5,
        delay: 0.5,
      })
      .from(".pot, .table, #laptop", {
        scale: 0,
        transformOrigin: "50% 50%",
        duration: 0.5,
      })
      .from(".stem, .pen", { scale: 0, duration: 0.5 })
      .from(".pleaf", { scale: 0, transformOrigin: "start", duration: 0.5 })
      .to("#laptop-screen", { rotateX: "0deg", ease: "none" });
  }, []);

  return (
    <section className={`p-[5%] h-screen flex-col ${hidden && "hidden"}`}>
      <div
        className="absolute text-[4rem] md:text-[6rem] font-extrabold"
        id="header"
      >
        Hello there
      </div>

      <div className="w-full h-auto absolute scale-[0.95] left-0 lg:bottom-[10%] md:bottom-[15%] bottom-[25%]">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 971.4 502"
          enableBackground="new 0 0 971.4 502"
          xmlSpace="preserve"
        >
          <g id="a622e68e-7a65-46e9-94a9-d455de519afc">
            <path
              className="stem"
              opacity="0.6"
              fill="none"
              stroke="#535461"
              strokeWidth="3"
              strokeMiterlimit="10"
              enableBackground="new"
              d="M102.7,389c0,0-19-83,23-190"
            />
            <path
              className="pot"
              fill="#6C63FF"
              d="M28.7,364h147c0,0,29,37-16,92h-116C43.7,456,1.7,418,28.7,364z"
            />
            <path
              className="pleaf"
              fill="#4DB6AC"
              d="M123.6,204.5c0,0,14.6-26,49.6-18c0,0-28.9,49.3-55,33.1L123.6,204.5z"
            />
            <path
              className="pleaf"
              fill="#4DB6AC"
              d="M114.4,232.1c0,0-1.1-26.6-30.1-33.6c0,0,3,58,26,48.5L114.4,232.1z"
            />
            <path
              className="pleaf"
              fill="#4DB6AC"
              d="M104.9,271.4c0,0,5.4-27.9,61.4-39.9c0,0-17.9,57.6-63.9,55.3L104.9,271.4z"
            />
            <path
              className="pleaf"
              fill="#4DB6AC"
              d="M100.3,302.6c0,0,5.9-29.1-29.1-56.1c0,0-38,64.7,27.5,76.8L100.3,302.6z"
            />
            <path
              className="pleaf"
              fill="#4DB6AC"
              d="M99.3,342.7c0,0-4.1-41.2,39.9-49.2c0,0-16.1,57.5-40,67.7L99.3,342.7z"
            />
            <path
              className="pleaf"
              opacity="0.3"
              fill="none"
              stroke="#535461"
              strokeMiterlimit="10"
              enableBackground="new"
              d="M118.7,220
										c0,0,38-29,54-34"
            />
            <path
              className="pleaf"
              opacity="0.3"
              fill="none"
              stroke="#535461"
              strokeMiterlimit="10"
              enableBackground="new"
              d="M102.2,286.5
										c0,0,46-49,64-55"
            />
            <path
              className="pleaf"
              opacity="0.3"
              fill="none"
              stroke="#535461"
              strokeMiterlimit="10"
              enableBackground="new"
              d="M84.2,198.5
										c0,0,28,38,26,48"
            />
            <path
              className="pleaf"
              opacity="0.3"
              fill="none"
              stroke="#535461"
              strokeMiterlimit="10"
              enableBackground="new"
              d="M71.2,246.5
										c0,0,15,68,27,77"
            />
            <path
              className="pleaf"
              opacity="0.3"
              fill="none"
              stroke="#535461"
              strokeMiterlimit="10"
              enableBackground="new"
              d="M99.2,361.5c0,0,24-66,40-68"
            />
            <g className="pot" opacity="0.1">
              <path d="M175.7,364h-147c-0.3,0.7-0.6,1.3-1,2h143c0,0,28.3,36.1-14.4,90h3.4C204.7,401,175.7,364,175.7,364z" />
            </g>
            <rect
              className="table"
              y="455.6"
              fill="#E0E0E0"
              width="971.4"
              height="32.9"
            />
            <rect
              className="table"
              x="41.2"
              y="488.5"
              fill="#E0E0E0"
              width="889.1"
              height="13.5"
            />
            <rect
              className="table"
              x="41.2"
              y="488.5"
              opacity="0.1"
              enableBackground="new"
              width="889.1"
              height="4.5"
            />

            <g className="pen" id="greenpen">
              <rect x="835.7" y="321" fill="#535461" width="16" height="100" />
              <rect x="835.7" y="288" fill="#3AD29F" width="16" height="33" />
            </g>

            <g className="pen" id="bluepen">
              <rect x="857.7" y="329" fill="#535461" width="16" height="100" />
              <rect x="857.7" y="296" fill="#4D8AF0" width="16" height="33" />
            </g>
            <g className="pen" id="redpen">
              <rect x="884.7" y="346" fill="#535461" width="16" height="100" />
              <rect x="884.7" y="313" fill="#F55F44" width="16" height="33" />
            </g>
            <path
              className="pot"
              fill="#6C63FF"
              d="M821.7,352h92l0,0v79.5c0,13-10.5,23.5-23.5,23.5h-45c-13,0-23.5-10.5-23.5-23.5V352L821.7,352z"
            />
          </g>
        </svg>

        <div
          className="container absolute w-[40vw] left-1/2 -translate-x-1/2 bottom-[10%]"
          id="laptop"
        >
          <div className="mockup mockup-macbook loaded opened">
            <div className="part top" id="laptop-screen">
              <img
                src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-top.svg"
                alt=""
                className="top"
              />
              <img
                src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg"
                alt=""
                className="cover"
              />
              <Image
                src={"/nature_bg/mountain.jpg"}
                alt="nature laptop bg"
                width={500}
                height={1000}
                className="w-full h-auto laptop-image"
              />
            </div>
            <div className="part bottom">
              <img
                src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg"
                alt=""
                className="cover"
              />
              <img
                src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-bottom.svg"
                alt=""
                className="bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
