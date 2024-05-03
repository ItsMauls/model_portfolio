import { cn } from "@/lib/utils"

interface Input {
    className? : string
    type : string
    placeholder : string
    name : string
    onChange : any
}

export const Input = ({className, type, placeholder, ...props} : Input) => {
    return (
        <input type={type} className={`${cn('text-white block md:py-1 py-3 w-5/6 px-2 md:w-full mx-auto my-4 line box-border' , className)}`} placeholder={placeholder} {...props}/>            
    )
}