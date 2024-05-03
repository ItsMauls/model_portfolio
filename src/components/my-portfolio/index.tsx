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
            className={`transition-opacity text-center text-5xl duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            My Portfolio
        </h1>
            {/* <h1 className='mt-4'>Stock your dessert table with Hallo Butter and send treats to your whole gifting list - we’re delivering big on holiday cheer.</h1> */}
        </div>
        <Swiper data={myPortfolio} autoplay/>
    </div>
    )
}