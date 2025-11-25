/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",           // ← OVO JE NAJVAŽNIJE
  trailingSlash: true,
  images: {
    unoptimized: true         // GitHub Pages ne podržava Next Image optimizaciju
  }
};

module.exports = nextConfig;