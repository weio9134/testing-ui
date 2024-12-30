import Image from "next/image";
import styles from "./float.module.css";

const companies = [
  "/companies/capitalone.jpg",
  "/companies/apple.jpg",
  "/companies/blackrock.jpg",
  "/companies/amazon.jpg",
  "/companies/palantir.jpeg",
  "/companies/bloomberg.png",
  "/companies/jpmorgan.png",
  "/companies/janestreet.jpeg",
  "/companies/google.png",
  "/companies/2sigma.png",
  "/companies/spacex.png",
  "/companies/motorola.png",
  "/companies/ramp.png",
];
const names = [
  "c1",
  "apple",
  "blackrock",
  "amazon",
  "palantir",
  "bloomberg",
  "jpm",
  "jstreet",
  "google",
  "sigma",
  "spacex",
  "moto",
  "ramp",
];

const Icon = ({ path, className }: { path: string; className: string }) => {
  return (
    <div className={`${className} w-full h-full`}>
      <img src={path} alt={path} className={`w-full h-full object-fill`} />
    </div>
  );
};

const page = () => {
  return (
    <section className="w-screen min-h-screen flex flex-col gap-10 justify-center items-center pt-[5vw] bg-black">
      <div
        className={`${styles["float"]} w-[250px] h-[250px] bg-red-500 translate-y-[-10px]`}
      />
      <div className={`w-full p-10 ${styles.grid}`}>
        {companies.map((path, index) => (
          <Icon
            key={path + index}
            path={path}
            className={styles[names[index]]}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
