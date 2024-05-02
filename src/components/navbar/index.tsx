import { modelName } from "@/constants"
import { NavItems } from "./NavItems"

export const NavBar = () => {
    return (
        <nav className="bg-white top-0 z-50 sticky" aria-label="Main navigation">
            <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-2">
                <div>
                    <h1 className="font-medium text-3xl">
                        {modelName}
                    </h1>
                </div>
                <div>
                    <NavItems />
                </div>
            </div>
        </nav>
    )
}