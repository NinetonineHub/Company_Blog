/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@react-three/drei'],
  },

  reactStrictMode: true,
};

export default nextConfig;