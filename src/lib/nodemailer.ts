import { createTransport } from 'nodemailer'

const host = process.env.NODEMAILER_HOST as string
const port = process.env.NODEMAILER_PORT as number | any
const user = process.env.NODEMAILER_USER as string
const pass = process.env.NODEMAILER_PASS as string

const config = {
    host,
    port,
    auth: {
        user,
        pass
    }
}

export const transporter = createTransport(config)