import { myPortfolio } from "@/constants"
import Swiper from "../swiper"

export const MyPortfolio = () => {
    return (
    <div className='p-8 bg-gray-50 my-4 ' id='portfolio'>
        <div className='text-center my-8 mt-14'>
            <h1 className='font-bold text-4xl'>My Portfolio</h1>
            <h1 className='mt-4'>Stock your dessert table with Hallo Butter and send treats to your whole gifting list - we’re delivering big on holiday cheer.</h1>
        </div>
        <Swiper data={myPortfolio} autoplay/>
    </div>
    )
}