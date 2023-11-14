/** @type {import('next').NextConfig} */
const nextConfig = {
    // transpilePackages: ['three'],
    experimental: {
      runtime: "experimental-edge",
    },
    reactStrictMode: true,
    swcMinify: true,
}


module.exports = nextConfig
