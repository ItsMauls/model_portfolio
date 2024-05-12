import { transporter } from "@/lib/nodemailer";
import { NextRequest, NextResponse } from "next/server";

export  async function POST(req: NextRequest) {
    const body = await req.json()
    const err = [] as any

    const {
        email,
        subject,
        name,
        message
    } = body
    
    // if(!email) err.push({msg: 'Please insert your email!', statusCode : 400, errorName : 'email'})
    // if(!message) err.push({msg: 'Must include message!', statusCode : 400, errorName : 'message'})
    // if(!subject) err.push({msg: 'Must include subject!', statusCode : 400, errorName : 'subject'})
    // if(!name) err.push({msg: 'Must include name!', statusCode : 400, errorName : 'name'})
    

    const config = {
        from : email,
        to : process.env.RECEIVER_EMAIL as string,
        subject : `${name} | ${subject}`,
        html : message
    }

    try {
        if(err.length > 0) return NextResponse.json({err})
        await transporter.sendMail(config)
        return NextResponse.json({message : config}, {status : 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error}, {status: 500})
    }
}