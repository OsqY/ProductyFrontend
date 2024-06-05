/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path',
  //       destination: 'http://localhost:5256/api/:path'
  //     }
  //   ]
  // }

};
export default nextConfig;
