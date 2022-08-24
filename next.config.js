/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  nextConfig,
  images: {
    minimumCacheTTL: 31536000,
    domains: ['res.cloudinary.com'],
  },
}
