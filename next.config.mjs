/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV !== 'production',
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV !== 'production',
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    // Add your image domains/patterns here
    remotePatterns: [
      // Example:
      // {
      //   protocol: 'https',
      //   hostname: '**.example.com',
      // },
    ],
    // Optimize for common device widths
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  reactStrictMode: true,
};

export default nextConfig;