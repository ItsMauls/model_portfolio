import { transporter } from "@/lib/nodemailer";
import { NextRequest, NextResponse } from "next/server";

export  async function POST(req: NextRequest) {
    const body = await req.json()
    
    const {
        email,
        subject,
        name,
        message
    } = body
    
    const config = {
        from : email,
        to : process.env.RECEIVER_EMAIL as string,
        subject : `${name} | ${subject}`,
        html : message
    }
    console.log(config, 'configk')
    try {
        await transporter.sendMail(config)
        return NextResponse.json({message : config}, {status : 201})
    } catch (error) {
        return NextResponse.json({error}, {status: 500})
    }
}