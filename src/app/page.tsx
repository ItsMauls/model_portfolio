import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { ImagePreview } from "@/components/image-preview";
import { MyPortfolio } from "@/components/my-portfolio";
import { MyStory } from "@/components/my-story";
import { ParallaxComp } from "@/components/parallax";
import { modelName } from "@/constants";
import Image from "next/image";


export default function Home() {
  return (
    <div className="mx-auto">
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
      <MyStory />
      <MyPortfolio />
      <Gallery />
      <ImagePreview
        className="z-50"
        alt={modelName}
        src={'https://www.firstforwomen.com/wp-content/uploads/sites/2/2024/01/Ryan-Gosling.jpg?w=953'}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Footer />
   </div>
  );
}
