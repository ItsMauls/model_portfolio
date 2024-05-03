'use client'
import { useSubmit } from "@/hooks/useSubmit"
import { Input } from "./Input"
import { TextArea } from "./TextArea"
import { useInput } from "@/hooks/useInput"
import { api } from "@/constants/api"
import { Button } from "../ui/Button"

const defaultValue = {
    name : '',
    email : '',
    subject : '',
    message : ''
}

export const Form = () => {
    const { inputHandler, input } = useInput(defaultValue) as any
    const { submitHandler } = useSubmit(input, api.send_mail)
    
    return (
        <div className="mx-auto flex justify-center">
            <form onSubmit={submitHandler}>
            <input type="text" className="block opacity-0 py-1 px-24 my-2 line box-border"/>
                <Input
                    onChange={inputHandler}
                    name="name"
                    type='text'
                    className="bg-black placeholder:text-start placeholder:text-white"
                    placeholder='Name'
                    />
                <Input 
                    onChange={inputHandler}
                    name="email"
                    type='email'
                    className="bg-black placeholder:text-white"
                    placeholder='Email'
                    />
                <Input 
                    onChange={inputHandler}
                    name="subject"
                    type='text'
                    className="bg-black placeholder:text-white"
                    placeholder='Subject'
                    />
                <TextArea 
                    onChange={inputHandler}
                    name="message"
                    placeholder="Message"
                    className="px-2 bg-black mx-auto"
                    /> 
                <Button type="submit" className="my-4 ml-8 md:ml-0 px-12 py-3 bg-black md:float-right rounded-sm">Send</Button>
            </form>
        </div>
    )
}