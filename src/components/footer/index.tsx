import { Form } from "./Form"


export const Footer = () => {
    return (
        <footer className="w-3/5 mx-auto">
            <div className="bg-gray-100 rounded-sm p-14 my-4">
                <h1 className="tracking-wider text-center text-6xl"><strong>TOUCH</strong>BASE</h1>
                <h3 className="text-xl text-center">I'D LOVE TO HEAR YOU!</h3>
                    <Form />
            </div>
        </footer>
    )
}