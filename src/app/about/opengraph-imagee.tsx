import { modelName } from '@/constants';
import Image from 'next/image';
import { ImageResponse } from 'next/og';
 
export async function GET() {
    const firstName = modelName.split(' ')[0];
    const lastName = modelName.split(' ')[1];
    const title = 'Model and Software Engineer'
  return new ImageResponse(
    (
        <div className="relative w-full h-500px">
            <Image
                alt={`${modelName}`}
                src={'/images/personal/ibra4.jpg'}                
                width={500}
                height={500}
                quality={100}
                className={'w-full h-full object-cover md:w-2/4 md:mx-auto'}
            />
            <h1 className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 md:p-8">
                    <span className="font-bold text-5xl md:text-7xl lg:text-7xl">{firstName} </span>
                    <span className="font-light text-4xl md:text-6xl lg:text-7xl">{lastName}</span>
                    <span className="block text-xl md:text-2xl lg:text-3xl mt-2 md:mt-4">{title}</span>
            </h1>
        </div>
  ))
}