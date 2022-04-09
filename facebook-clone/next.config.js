/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org', 
      'static.xx.fbcdn.net', 
      'platform-lookaside.fbsbx.com',
      'images.unsplash.com',
      'images.pexels.com',
      'www.mckinsey.com',
      'images.unsplash.com'
    ],
  },
};

module.exports = nextConfig
