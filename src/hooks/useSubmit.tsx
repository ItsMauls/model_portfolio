import { postRequest } from "@/constants/httpRequest"


export const useSubmit = (value : string, url : string) => {
    const submitHandler = async(e: React.FormEvent<HTMLFormElement>) =>  {
    e.preventDefault()
        try {
            const res = await fetch(url, postRequest(value))
            console.log(res)
            
        } catch (error) {
            throw error
        }
    }
    return {
        submitHandler
    }
}