import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
import { isVideoUrl } from '@/lib/media'
import { getRawGalleryPhotos, getRawHeroMediaUrl, getRawWorkItems } from '@/lib/model-content'
import { isLoggedIn } from '@/lib/session'
import { addGalleryPhoto, addWorkItem, deleteGalleryPhoto, deleteWorkItem, logout, updateHeroMedia } from './actions'

export default async function AdminPage() {
  if (!(await isLoggedIn())) redirect('/admin/login')

  const [heroMediaUrl, workItems, galleryPhotos] = await Promise.all([
    getRawHeroMediaUrl(),
    getRawWorkItems(),
    getRawGalleryPhotos(),
  ])

  return (
    <main className="min-h-dvh bg-neutral-950 px-6 py-10 text-white sm:px-10">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Admin</h1>
          <form action={logout}>
            <button type="submit" className="text-sm text-white/60 hover:text-white">
              Sign out
            </button>
          </form>
        </div>

        {!db && (
          <p className="rounded border border-yellow-500/40 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-200">
            DATABASE_URL is not set — the site is showing static fallback content and changes here won&apos;t save.
          </p>
        )}

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Hero media</h2>
          {heroMediaUrl &&
            (isVideoUrl(heroMediaUrl) ? (
              <video src={heroMediaUrl} muted className="h-40 rounded object-contain" />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element -- admin thumbnail, any host
              <img src={heroMediaUrl} alt="" className="h-40 rounded object-contain" />
            ))}
          <form action={updateHeroMedia} className="space-y-2">
            <input
              type="file"
              name="heroMediaFile"
              accept="image/*,video/*"
              required
              className="text-sm text-white/70"
            />
            <button type="submit" className="rounded bg-white px-3 py-1.5 text-sm font-medium text-neutral-900">
              Upload
            </button>
          </form>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Selected work</h2>
          <ul className="space-y-2">
            {workItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between rounded border border-white/10 px-3 py-2 text-sm"
              >
                <span>
                  {item.brand} <span className="text-white/50">— {item.role}</span>
                </span>
                <form action={deleteWorkItem}>
                  <input type="hidden" name="id" value={item.id} />
                  <button type="submit" className="text-white/50 hover:text-red-400">
                    Remove
                  </button>
                </form>
              </li>
            ))}
          </ul>
          <form action={addWorkItem} className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <input
              name="brand"
              placeholder="Brand"
              required
              className="rounded border border-white/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-white/50"
            />
            <input
              name="role"
              placeholder="Role (e.g. Product campaign)"
              className="rounded border border-white/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-white/50"
            />
            <input
              type="file"
              name="imageFile"
              accept="image/*"
              required
              className="text-sm text-white/70 sm:col-span-2"
            />
            <button
              type="submit"
              className="col-span-full rounded bg-white px-3 py-1.5 text-sm font-medium text-neutral-900"
            >
              Add
            </button>
          </form>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Gallery</h2>
          <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {galleryPhotos.map((photo) => (
              <li key={photo.id} className="space-y-1">
                {/* eslint-disable-next-line @next/next/no-img-element -- admin thumbnail, any host */}
                <img src={photo.imageUrl} alt="" className="aspect-square w-full rounded object-cover" />
                <form action={deleteGalleryPhoto}>
                  <input type="hidden" name="id" value={photo.id} />
                  <button type="submit" className="w-full text-xs text-white/50 hover:text-red-400">
                    Remove
                  </button>
                </form>
              </li>
            ))}
          </ul>
          <form action={addGalleryPhoto} className="space-y-2">
            <input type="file" name="imageFile" accept="image/*" required className="text-sm text-white/70" />
            <button type="submit" className="rounded bg-white px-3 py-1.5 text-sm font-medium text-neutral-900">
              Add photo
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}
