import { myGallery } from "@/constants"
import Swiper from "../swiper"


export const Gallery = () => {
    return (
    <div className='p-8 bg-gray-50 my-4 py-14'>
        <div className='text-center my-8 mt-14'>
            <h1 id='gallery' className='text-5xl tracking-wide'><strong>Gall</strong>ery</h1>           
        </div>
        <Swiper
            slides={3} 
            navigation={true}
            data={myGallery}/>
    </div>
    )
}