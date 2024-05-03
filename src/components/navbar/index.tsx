'use client'
import { modelName } from "@/constants"
import { NavItems } from "./NavItems"
import { useToggle } from "@/hooks/useToggle";

export const NavBar = () => {
    const {
        isOpen,
        setIsOpen
    } = useToggle()
    return (
        <nav className="bg-white top-0 z-50 sticky" id="home" aria-label="Main navigation">
            <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-2">
                <h1 className={`font-medium text-3xl pl-1 font-serif`}>
                    {modelName}
                </h1>
                <button className="text-4xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? '✖' : '☰'}
                </button>
                <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
                    <NavItems />
                </div>
            </div>
        </nav>
    );
}