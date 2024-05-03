
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
      <div className="mx-auto">
        <Banner 
          alt={`${modelName}`}
          src={'/images/poto1.jpeg'}
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
            src={'https://www.firstforwomen.com/wp-content/uploads/sites/2/2024/01/Ryan-Gosling.jpg?w=953'}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </ParallaxComp>
        <Footer />
    </div>
  );
}
