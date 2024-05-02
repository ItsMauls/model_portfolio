import { p1, p2, p3 } from "@/constants/paragraph"

export const MyStory = () => {
    return (
        <section>
            <div className="grid grid-cols-2 my-14">
                <div>
                    <h1 className="text-6xl text-center">This Is <strong>My Story</strong></h1>
                    <div className="px-32 text-md py-14 mx-auto text-center">
                        <p>{p1}</p>
                        <p className="my-4">{p2}</p>
                        <p>{p3}</p>                                                                                                                        
                    </div>
                </div>
                <div className="parallax">{/* image parallax */}</div>
            </div>
        </section>
    )
}