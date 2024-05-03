import { cn } from "@/lib/utils"

interface TextArea {
    placeholder : string
    className? : string
    name : string
    onChange : any
}

export const TextArea = ({className, ...props} : TextArea) => {
    return (
        <textarea {...props} className={`${cn(" text-white block md:w-full w-5/6 md:py-1 py-3 my-2 placeholder:text-white box-border", className)}`} {...props}/>
    )
}