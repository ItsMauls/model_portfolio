'use client'

import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import Image from 'next/image';

import { MyPortfolio } from '@/constants';
import { cn } from '@/lib/utils';




const Swiper = ({
    data,
    delay = 1100,
    slides = 4,
    autoplay,
    className,
    ...props} : any) => {

    const breakpointsConfig = {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
          },          
          480: {
            slidesPerView: 2,
            spaceBetween: 30
          },          
          640: {
            slidesPerView: slides,
            spaceBetween: 40
          }
    }

    return (
        <SwiperComponent    
            className={cn('swiper-slide', className)}
            modules={autoplay ? [Autoplay] : [Navigation]}
            loop={true}
            autoplay={{
                delay
            }}
            {...props}
            breakpoints={breakpointsConfig}
            spaceBetween={50}

            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {data.map((item : MyPortfolio) => {
                return <SwiperSlide>
                    <Image 
                        key={item.id}
                        width={500}
                        height={500}  
                        src={item.img}
                        alt={item.name} 
                        className="w-full rounded-lg object-cover" />
                </SwiperSlide>
            })}
                
        </SwiperComponent>
    )
}

export default Swiper