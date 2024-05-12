import { cn } from "@/lib/utils";
import Image from "next/image";
import { ParallaxComp } from "../parallax";
import { modelName } from "@/constants";

interface Banner {
    alt : string
    src : string
    layout? : string |  undefined
    objectFit? : string | undefined
    quality? : number
    className? : string
    width? : number
    height? : number
    title : string
}

export const Banner = ({ className, title, ...props } : Banner) => {
    const firstName = modelName.split(' ')[0];
    const lastName = modelName.split(' ')[1] +' ' + modelName.split(' ')[2];
    
    return (
        <div className="relative w-full h-500px">
            <Image
                {...props}
                className={`${cn('w-full h-full object-cover', className)}`}
            />
            <h1 className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 md:p-8">
                <ParallaxComp speed={25}>
                    <span className="font-bold text-5xl md:text-7xl lg:text-7xl">{firstName} </span>
                    <span className="font-light text-4xl md:text-6xl lg:text-7xl">{lastName}</span>
                    <span className="block text-xl md:text-2xl lg:text-3xl mt-2 md:mt-4">{title}</span>
                </ParallaxComp> 
            </h1>
        </div>
    );
}