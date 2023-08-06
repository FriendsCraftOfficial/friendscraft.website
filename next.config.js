/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/Discord',
        destination: 'https://discord.gg/9HFENuTPnm',
        permanent: false
      }
    ];
  },
}

module.exports = nextConfig
