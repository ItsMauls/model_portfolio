import Image from 'next/image'
import { isVideoUrl } from '@/lib/media'

/**
 * Hero media — a video or a still image, set from /admin. Sized to a fixed
 * band regardless of the media's own aspect ratio: `object-contain` fits
 * the whole frame inside that band — letting width or height go slack
 * (never cropping) — instead of stretching the section to match its shape,
 * which is what previously made a portrait (e.g. 720x1280) upload blow the
 * section way past the viewport.
 */
export function ModelHero({ mediaUrl }: { mediaUrl: string }) {
  const showVideo = mediaUrl && isVideoUrl(mediaUrl)
  const showImage = mediaUrl && !showVideo

  return (
    <section id="hero" className="relative h-[85vh] min-h-[480px] w-full bg-black">
      {showVideo && (
        <video
          key={mediaUrl}
          src={mediaUrl}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-contain"
        />
      )}

      {showImage && <Image key={mediaUrl} src={mediaUrl} alt="" fill sizes="100vw" className="object-contain" />}

      {!mediaUrl && (
        // eslint-disable-next-line @next/next/no-img-element -- plain fallback poster, no next/image needed for a static default
        <img src="/images/personal/hero-sunset.jpg" alt="" className="h-full w-full object-cover" />
      )}
    </section>
  )
}
