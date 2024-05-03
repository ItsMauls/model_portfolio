import { postRequest } from "@/constants/httpRequest"


export const useSubmit = (value : string, url : string) => {
    const submitHandler = async(e: React.FormEvent<HTMLFormElement>) =>  {
    e.preventDefault()
        try {
            await fetch(url, postRequest(value))
        } catch (error) {
            throw error
        }
    }
    return {
        submitHandler
    }
}