"use client";
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const page = () => {
  const [clicked, setClicked] = useState(true);
  const [slideSpring, slideAPI] = useSpring(() => ({
    from: { x: 0 },
  }));

  const [loaded, setLoaded] = useState(true);
  const [loadSpring, loadAPI] = useSpring(() => ({
    from: { width: 0 },
  }));

  return (
    <section className="min-h-screen w-screen flex flex-col p-4 gap-8">
      {/* sliding box */}
      <animated.div
        onClick={() => {
          slideAPI.start({
            from: {
              x: clicked ? 0 : 300,
            },
            to: {
              x: clicked ? 300 : 0,
            },
          });
          setClicked(!clicked);
        }}
        style={{
          width: 80,
          height: 80,
          background: "#ff6d6d",
          borderRadius: 8,
          ...slideSpring,
        }}
      />

      {/* loading bar */}
      <div
        className={`cursor-pointer border-2 border-black rounded w-[200px] h-[50px] overflow-hidden`}
        onClick={() => {
          loadAPI.start({
            from: {
              width: loaded ? 0 : 200,
            },
            to: {
              width: loaded ? 200 : 0,
            },
          });

          setLoaded(!loaded);
        }}
      >
        <animated.div
          style={{
            backgroundColor: "black",
            height: 50,
            ...loadSpring,
          }}
        />
      </div>
    </section>
  );
};

export default page;
