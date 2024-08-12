import GoTo from "@/components/GoTo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-screen max-h-screen flex gap-8 p-8 flex-wrap">
      <GoTo url={"projects/3d-spinning-slides"} text={"3D Spinnning Slide"} />
      <GoTo
        url={"projects/recreate-auv-landing"}
        text={"Recreate AUV Landing"}
      />
      <GoTo url={"projects/sliding-bgs"} text={"Sliding Backgrounds"} />
      <GoTo
        url={"projects/spin-center-cards"}
        text={"Spinning Centered Cards"}
      />
      <GoTo url={"projects/laptop-animation"} text={"Laptop Animation"} />
    </main>
  );
}
