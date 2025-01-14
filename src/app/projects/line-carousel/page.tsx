import React from "react";
import Image from "next/image";
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
  return (
    <section className="w-screen  px-12 pt-12">
      <div className="w-full h-[350px] overflow-hidden">
        <ul className="w-full min-w-[2500px] relative">
          {dragons.map((src, index) => (
            <li
              key={index}
              style={{ "--index": index } as React.CSSProperties}
              className="card"
            >
              <img src={src} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
