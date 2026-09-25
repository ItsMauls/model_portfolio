import { db } from './db'

export type WorkItem = { id: string; brand: string; role: string; imageUrl: string; order: number }
export type GalleryPhoto = { id: string; imageUrl: string; order: number }

/**
 * Static fallback content, used when DATABASE_URL is unset (fresh clone,
 * no DB provisioned yet) or the table is still empty. `/admin` writes to
 * the DB; these arrays are also what `prisma/seed.ts` loads on `db:seed`.
 */
export const defaultHeroMediaUrl = ''

export const defaultWorkItems: WorkItem[] = [
  { id: 'mayora', brand: 'Mayora', role: 'Product campaign', imageUrl: '/images/brands/mayora.png', order: 0 },
  {
    id: 'east-ventures',
    brand: 'East Ventures',
    role: 'Brand collaboration',
    imageUrl: '/images/brands/East-Ventures-Square-Logo.png',
    order: 1,
  },
  { id: 'rimkirim', brand: 'RimKirim', role: 'Campaign shoot', imageUrl: '/images/brands/rimkirim.jpg', order: 2 },
]

export const defaultGalleryPhotos: GalleryPhoto[] = [
  '/images/personal/ibra1.jpg',
  '/images/personal/ibra2.jpg',
  '/images/personal/ibra3.jpg',
  '/images/personal/ibra4.jpg',
  '/images/personal/ibra5.jpg',
  '/images/personal/maulana_model.png',
].map((imageUrl, order) => ({ id: imageUrl, imageUrl, order }))

/**
 * The static defaults are only a stand-in for "no database configured yet".
 * Once a DB exists, an empty table is a real, intentional state (an admin
 * deleted everything) and must render empty, not silently repopulate.
 */
export async function getHeroMediaUrl(): Promise<string> {
  if (!db) return defaultHeroMediaUrl
  return getRawHeroMediaUrl()
}

export async function getWorkItems(): Promise<WorkItem[]> {
  if (!db) return defaultWorkItems
  return getRawWorkItems()
}

export async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
  if (!db) return defaultGalleryPhotos
  return getRawGalleryPhotos()
}

/**
 * Admin-only: the actual DB rows, with no fallback to the static defaults.
 * The public getters above blend in defaults when a table is empty, which
 * is right for visitors but wrong for /admin — it must only ever list (and
 * offer to delete) rows that really exist, or "Remove" on a default item
 * throws since that id was never in the table.
 */
export async function getRawHeroMediaUrl(): Promise<string> {
  if (!db) return ''
  const settings = await db.siteSettings.findUnique({ where: { id: 1 } })
  return settings?.heroMediaUrl ?? ''
}

export async function getRawWorkItems(): Promise<WorkItem[]> {
  if (!db) return []
  return db.workItem.findMany({ orderBy: { order: 'asc' } })
}

export async function getRawGalleryPhotos(): Promise<GalleryPhoto[]> {
  if (!db) return []
  return db.galleryPhoto.findMany({ orderBy: { order: 'asc' } })
}
