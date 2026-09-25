import createNextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Vercel Blob public URLs.
    remotePatterns: [{ protocol: 'https', hostname: '*.public.blob.vercel-storage.com' }],
  },
}

export default createNextIntlPlugin()(nextConfig)
