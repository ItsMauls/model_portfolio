'use client'
import { myPortfolio } from "@/constants"
import Swiper from "../swiper"
import useVisibility from "@/hooks/useVisibility";

export const MyPortfolio = () => {
    const { isVisible, headingRef } = useVisibility();
    return (
    <div className='p-8 my-4' id='portfolio'>
        <div className='text-center my-8 mt-14'>
            <h1 
                ref={headingRef}
                className={`transition-opacity text-center text-4xl duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <strong>COLLABORATIONS</strong> WITH
            </h1>
        </div>
        <Swiper data={myPortfolio} autoplay/>
    </div>
    )
}