import { cn } from "@/lib/utils"

interface TextArea {
    placeholder : string
    className? : string
    name : string
    onChange : any
}

export const TextArea = ({className, ...props} : TextArea) => {
    return (
        <textarea {...props} className={`${cn("bg-black text-white block w-full my-2 placeholder:text-white", className)}`} {...props}/>
    )
}