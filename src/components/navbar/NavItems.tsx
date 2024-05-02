import { navLists } from "@/constants"
import Link from "next/link"

export const NavItems = () => {
    return (
        <div>
            <ul className="flex flex-row">
                {navLists.map((val, idx) => {
                    return <li className="block px-4 py-2 font-medium" key={idx}>
                                <Link href={`#${val.link}`}>{val.name}</Link>
                            </li>
                })}
            </ul>   
        </div>
    )
}