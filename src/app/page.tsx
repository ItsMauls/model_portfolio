import { Gallery } from "@/components/gallery";
import { MyPortfolio } from "@/components/my-portfolio";
import { MyStory } from "@/components/my-story";
import { ParallaxComp } from "@/components/parallax";
import { modelName } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-5/6 mx-auto">
      <ParallaxComp>
        <Image 
          alt={`${modelName}`}
          src={'https://www.firstforwomen.com/wp-content/uploads/sites/2/2024/01/Ryan-Gosling.jpg?w=953'}
          className="w-full"
          width={500}
          height={500}
          quality={100}
        />
      </ParallaxComp>
      <MyPortfolio />
      <MyStory />
      <Gallery />
   </div>
  );
}
