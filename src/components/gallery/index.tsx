'use client'
import { myGallery } from "@/constants"
import Swiper from "../swiper"
import useVisibility from "@/hooks/useVisibility";


export const Gallery = () => {
    const { isVisible, headingRef } = useVisibility();
    return (
    <div id='gallery' className='p-8 bg-gray-50 my-4 py-14 w-full'>
        <div className='text-center my-8 mt-14'>
        <h1 
            ref={headingRef}
            className={`transition-opacity text-center text-5xl duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <strong>Gall</strong>ery
        </h1>           
        </div>
        <Swiper
            slides={3} 
            navigation={true}
            data={myGallery}/>
    </div>
    )
}