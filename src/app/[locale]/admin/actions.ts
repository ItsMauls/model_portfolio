'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { checkAdminPassword } from '@/lib/auth'
import { db } from '@/lib/db'
import { saveUpload } from '@/lib/media'
import { endSession, isLoggedIn, startSession } from '@/lib/session'

async function requireLogin() {
  if (!(await isLoggedIn())) throw new Error('Not authenticated')
}

function requireDb() {
  if (!db) throw new Error('DATABASE_URL is not set')
  return db
}

/** Reads the attached file field and stores it (uploads are the only source — no manual URLs). */
async function readUpload(formData: FormData, fileField: string): Promise<string> {
  const file = formData.get(fileField)
  if (!(file instanceof File) || file.size === 0) return ''
  return saveUpload(file)
}

export async function login(_prevState: string | undefined, formData: FormData): Promise<string | undefined> {
  const password = String(formData.get('password') ?? '')
  if (!checkAdminPassword(password)) return 'Incorrect password.'

  await startSession()
  redirect('/admin')
}

export async function logout() {
  await endSession()
  redirect('/admin/login')
}

export async function updateHeroMedia(formData: FormData) {
  await requireLogin()
  const heroMediaUrl = await readUpload(formData, 'heroMediaFile')
  if (!heroMediaUrl) return

  await requireDb().siteSettings.upsert({
    where: { id: 1 },
    update: { heroMediaUrl },
    create: { id: 1, heroMediaUrl },
  })

  revalidatePath('/[locale]/model', 'page')
  revalidatePath('/[locale]/admin', 'page')
}

export async function addWorkItem(formData: FormData) {
  await requireLogin()
  const brand = String(formData.get('brand') ?? '').trim()
  const role = String(formData.get('role') ?? '').trim()
  const imageUrl = await readUpload(formData, 'imageFile')
  if (!brand || !imageUrl) return

  const count = await requireDb().workItem.count()
  await requireDb().workItem.create({ data: { brand, role, imageUrl, order: count } })

  revalidatePath('/[locale]/model', 'page')
  revalidatePath('/[locale]/admin', 'page')
}

export async function deleteWorkItem(formData: FormData) {
  await requireLogin()
  const id = String(formData.get('id') ?? '')
  if (!id) return

  await requireDb().workItem.delete({ where: { id } })

  revalidatePath('/[locale]/model', 'page')
  revalidatePath('/[locale]/admin', 'page')
}

export async function addGalleryPhoto(formData: FormData) {
  await requireLogin()
  const imageUrl = await readUpload(formData, 'imageFile')
  if (!imageUrl) return

  const count = await requireDb().galleryPhoto.count()
  await requireDb().galleryPhoto.create({ data: { imageUrl, order: count } })

  revalidatePath('/[locale]/model', 'page')
  revalidatePath('/[locale]/admin', 'page')
}

export async function deleteGalleryPhoto(formData: FormData) {
  await requireLogin()
  const id = String(formData.get('id') ?? '')
  if (!id) return

  await requireDb().galleryPhoto.delete({ where: { id } })

  revalidatePath('/[locale]/model', 'page')
  revalidatePath('/[locale]/admin', 'page')
}
