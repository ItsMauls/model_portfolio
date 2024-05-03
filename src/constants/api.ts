export const HOST = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/api'
export const api = {
    send_mail : `${HOST}/send-mail`
}