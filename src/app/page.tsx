import GoTo from "@/components/GoTo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-screen max-h-screen flex gap-8 p-8 flex-wrap">
      <GoTo url={"projects/sliding-bgs"} text={"Sliding Backgrounds"} />
      <GoTo
        url={"projects/spin-center-cards"}
        text={"Spinning Centered Cards"}
      />
      <GoTo url={"projects/laptop-animation"} text={"Laptop Animation"} />
      <GoTo url={"projects/gsap-parallax"} text={"GSAP Parallax"} />
      <GoTo url={"projects/spring-intro"} text={"Intro to Spring"} />
    </main>
  );
}
