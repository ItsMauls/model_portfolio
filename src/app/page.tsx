
import { Banner } from "@/components/banner";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { ImagePreview } from "@/components/image-preview";
import { MyPortfolio } from "@/components/my-portfolio";
import { MyStory } from "@/components/my-story";
import { ParallaxComp } from "@/components/parallax";
import { modelName } from "@/constants";

export default function Home() {
  const title = 'Model and Software Engineer'

    return (
      <main className="mx-auto">
        <Banner 
          alt={`${modelName}`}
          src={'/images/personal/ibra4.jpg'}
          className="w-full md:w-2/3 md:mx-auto"
          width={300}
          height={300}
          quality={100}
          title={title}
        />
        <MyStory />
        <MyPortfolio />
        <Gallery />
        <ParallaxComp speed={-5}>
          <ImagePreview
            className="z-50"
            alt={modelName}
            src={'/images/personal/ibra5.jpg'}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </ParallaxComp>
        <Footer />
    </main>
  );
}
