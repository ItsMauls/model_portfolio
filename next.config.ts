import createNextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Vercel Blob public URLs.
    remotePatterns: [{ protocol: 'https', hostname: '*.public.blob.vercel-storage.com' }],
  },
  experimental: {
    serverActions: {
      // Default is 1MB; admin uploads (hero video, photos) need more room.
      // Images get re-encoded to AVIF (see lib/media.ts), so raw uploads can be generous.
      bodySizeLimit: '30mb',
    },
  },
}

export default createNextIntlPlugin()(nextConfig)
