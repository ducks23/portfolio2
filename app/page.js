import Car from "@/components/animation/Car";
import Work from "@/components/Work";
import VideoCard from "@/components/VideoCard";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className=" dark:bg-gray-800 font-mono">
      <Car />
      <Work />
      <VideoCard />
      <Contact />
    </div>
  );
}
