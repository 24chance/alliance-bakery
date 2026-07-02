/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "standalone",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },

  // Remove "X-Powered-By: Next.js" header (minor security + SEO hygiene)
  poweredByHeader: false,

  // Enable gzip/brotli compression
  compress: true,

  // Canonical URL consistency - no trailing slashes
  trailingSlash: false,

  // 301 redirects - preserves SEO equity when URLs change
  async redirects() {
    return [
      // Example: redirect legacy /course/:id to /courses/:id
      // {
      //   source: "/course/:id",
      //   destination: "/courses/:id",
      //   permanent: true,
      // },
    ]
  },

  // Security headers that also benefit SEO (e.g. HTTPS enforcement signals)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ]
  },
}

export default nextConfig
