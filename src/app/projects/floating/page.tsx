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

const Icon = ({ path, className }: { path: string; className?: string }) => {
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
      <div className={`w-full p-10 flex flex-col gap-10`}>
        <div className="flex gap-4">
          <Icon path={companies[0]} />
          <Icon path={companies[2]} />
          <Icon path={companies[5]} />
        </div>
        <div className="flex gap-4">
          <Icon path={companies[3]} />
          <Icon path={companies[2]} />
          <Icon path={companies[4]} />
        </div>
        <div className="flex gap-4">
          <Icon path={companies[6]} />
          <Icon path={companies[8]} />
        </div>
        <div className="flex gap-4">
          <Icon path={companies[7]} />
          <Icon path={companies[9]} />
          <Icon path={companies[11]} />
        </div>
        <div className="flex gap-4">
          <Icon path={companies[10]} />
          <Icon path={companies[12]} />
        </div>
      </div>
    </section>
  );
};

export default page;
