'use client'
import { p1, p2, p3 } from "@/constants/paragraph"
import useVisibility from "@/hooks/useVisibility";

export const MyStory = () => {
    const { isVisible, headingRef } = useVisibility();

    return (
        <section>
            <div className="grid grid-cols-2 my-14 bg-gray-50 p-14">
                <div>
                    <h1 
                        ref={headingRef}
                        className={`transition-all text-5xl text-center duration-700 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                    >
                        This Is <strong>My Story</strong>
                    </h1>
                    <div className="px-32 text-md py-14 mx-auto text-center">
                        <p>{p1}</p>
                        <p className="my-4">{p2}</p>
                        <p>{p3}</p>
                    </div>
                </div>
                <div className="parallax">{/* Tempat untuk paralaks gambar */}</div>
            </div>
        </section>
    )
}
