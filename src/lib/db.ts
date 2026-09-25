import { PrismaClient } from '@prisma/client'

declare global {
  var prismaClient: PrismaClient | undefined
}

/** Undefined when DATABASE_URL isn't set — callers fall back to static content. */
export const db = process.env.DATABASE_URL
  ? global.prismaClient ?? new PrismaClient()
  : undefined

if (db && process.env.NODE_ENV !== 'production') {
  global.prismaClient = db
}
