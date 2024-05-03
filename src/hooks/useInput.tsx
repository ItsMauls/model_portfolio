'use client'
import { useState } from "react"

export const useInput = (defaultValue : any) => {
    const [input, setInput] = useState(defaultValue);
    console.log(input)
    const inputHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setInput((currentInput : any) => ({
            ...currentInput,
            [name]: value
        }));
    };

    return {
        inputHandler,
        input
    };
}