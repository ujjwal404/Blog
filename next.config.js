/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   images: {
      domains: ['www.canva.com','avatars.dicebear.com','github.com'],
      formats: ['image/avif', 'image/webp'],
    },
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
module.exports = withBundleAnalyzer({})
module.exports = nextConfig
