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
        <input type={type} className={`${cn('text-white block py-1 px-2 w-full my-2 line box-border' , className)}`} placeholder={placeholder} {...props}/>            
    )
}