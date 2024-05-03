'use client'
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useParallax } from "react-scroll-parallax"

interface ImagePrev {
    alt : string
    src : string
    layout? : string |  undefined
    objectFit? : string | undefined
    quality? : number
    className? : string
    width? : number
    height? : number
}

export const ImagePreview = ({className, ...props} : ImagePrev) => {
    return (
    <div className="w-full h-96 relative overflow-hidden z-0">
        <Image              
            className={`${cn('' , className)}`}
            {...props}
        />
    </div>
    )
}