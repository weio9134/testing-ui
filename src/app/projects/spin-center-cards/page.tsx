"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./style.css";

const dragons = [
  "/dragons/dragon_1.jpg",
  "/dragons/dragon_2.jpg",
  "/dragons/dragon_3.jpg",
  "/dragons/dragon_4.jpg",
  "/dragons/dragon_5.jpg",
  "/dragons/dragon_6.jpg",
  "/dragons/dragon_7.jpg",
  "/dragons/dragon_8.jpg",
  "/dragons/dragon_9.jpg",
  "/dragons/dragon_10.jpg",
];

const page = () => {
  const [diameter, setDiameter] = useState(1000);

  const getDiameter = () => {
    const slider = document.getElementById("slider");
    if (!slider) return;

    const width = slider.offsetWidth;
    const height = slider.offsetHeight;
    const dia = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    setDiameter(dia);
  };

  const spiralIn = async () => {
    gsap.fromTo(
      ".card",
      {
        x: (index) => diameter * Math.sin((index * 36 * Math.PI) / 180) * -3,
        y: (index) => diameter * Math.cos((index * 36 * Math.PI) / 180) * -3,
      },
      {
        x: 0,
        y: 0,
        duration: 0.35,
        stagger: 0.15,
      }
    );
  };

  const rotateY = () => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline();

    ScrollTrigger.create({
      trigger: "#slider",
      start: "top top",
      end: "bottom 100%",
      onToggle: (self) => console.log("toggled, isActive:", self.isActive),
      onUpdate: (self) => {
        console.log(
          "progress:",
          self.progress.toFixed(3),
          "direction:",
          self.direction,
          "velocity",
          self.getVelocity()
        );
      },
    });
  };

  const handleGSAP = async () => {
    const timeline = gsap.timeline();

    // slide text in
    timeline.fromTo(
      ".header-text",
      {
        autoAlpha: 0,
        x: "-100%",
      },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1,
      }
    );

    // spiral cards in
    timeline.fromTo(
      ".card",
      {
        x: (index) => diameter * Math.sin((index * 36 * Math.PI) / 180) * -10,
        y: (index) => diameter * Math.cos((index * 36 * Math.PI) / 180) * -10,
        delay: 0.5,
      },
      {
        x: 0,
        y: 0,
        duration: 0.35,
        stagger: 0.15,
      }
    );
  };

  useEffect(() => {
    getDiameter();
  }, []);

  handleGSAP();

  return (
    <section className="w-screen h-screen flex justify-center">
      <div className="text-[5rem] md:text-[6rem] font-extrabold absolute header-text z-10">
        Hello there
      </div>
      <div id="slider" className="slider absolute top-[20%] md:top-[23%]">
        {dragons.map((url, index) => (
          <>
            {/* dragon image */}
            <div
              key={url}
              className={`card-container absolute inset-0`}
              style={{ "--index": index } as React.CSSProperties}
              onClick={() => console.log(url)}
            >
              <Image
                src={url}
                alt={url}
                width={200}
                height={250}
                className={`absolute card w-full h-full object-cover rounded-l`}
              />
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default page;
