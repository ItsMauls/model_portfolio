import { cn } from "@/lib/utils";
import { ReactNode } from "react"

interface Button {
    className : string
    children : ReactNode | string 
    type : 'submit' | 'reset' | 'button' | undefined;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Button = ({className, children, ...props} : Button) => {
    return <button {...props} className={`${cn('text-white p-2', className)}`}>{children}</button>
}