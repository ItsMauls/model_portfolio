'use client'
import { p1, p2, p3, p4 } from "@/constants/paragraph";
import useVisibility from "@/hooks/useVisibility";

export const MyStory = () => {
    const { isVisible, headingRef } = useVisibility();

    return (
        <section className="bg-gray-50 p-4 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-14">
                <div>
                    <h1
                        ref={headingRef}
                        className={`transition-all text-5xl text-center duration-700 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                    >
                        THIS IS <strong>MY STORY</strong>
                    </h1>
                    <div className="px-4 md:px-32 text-lg py-14 mx-auto text-center font-mono">
                        <p>{p1}</p>
                        <p className="my-4">{p3}</p>
                        <p>{p4}</p>
                    </div>
                </div>
                <div className="parallax">{/* Placeholder for parallax image */}</div>
            </div>
        </section>
    );
};
