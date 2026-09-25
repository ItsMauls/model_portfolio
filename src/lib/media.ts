import { randomUUID } from 'node:crypto'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { put } from '@vercel/blob'
import sharp from 'sharp'

const uploadsDir = path.join(process.cwd(), 'public', 'uploads')

async function store(filename: string, data: Buffer, contentType: string): Promise<string> {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const blob = await put(filename, data, { access: 'public', addRandomSuffix: true, contentType })
    return blob.url
  }

  // No Blob token configured (e.g. local dev): write into /public/uploads instead.
  await mkdir(uploadsDir, { recursive: true })
  await writeFile(path.join(uploadsDir, filename), data)
  return `/uploads/${filename}`
}

/** Saves an uploaded file. Images are always re-encoded to AVIF to keep them small. */
export async function saveUpload(file: File): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer())
  const id = randomUUID()

  if (file.type.startsWith('image/')) {
    const avif = await sharp(buffer).rotate().avif({ quality: 60 }).toBuffer()
    return store(`${id}.avif`, avif, 'image/avif')
  }

  const ext = path.extname(file.name)
  return store(`${id}${ext}`, buffer, file.type || 'application/octet-stream')
}

const videoExtensions = new Set(['.mp4', '.webm', '.mov', '.m4v', '.ogv'])

/** Everything `saveUpload` writes is either .avif (image) or its original video extension. */
export function isVideoUrl(url: string): boolean {
  return videoExtensions.has(path.extname(url).toLowerCase())
}
