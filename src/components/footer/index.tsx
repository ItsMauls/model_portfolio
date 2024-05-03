import React from 'react';
import { Form } from "./Form";

export const Footer = () => {
    return (
        <footer id='contact' className="w-full flex justify-center items-center py-4">
            <div className="bg-gray-100 rounded-sm p-4 md:p-14 my-4 w-full max-w-screen-lg">
                <h1 className="tracking-wider text-center text-3xl md:text-5xl lg:text-6xl font-bold">TOUCH BASE</h1>
                <h3 className="text-xl text-center mt-2">{"I'D LOVE TO HEAR FROM YOU!"}</h3>
                <Form />
            </div>
        </footer>
    );
};
