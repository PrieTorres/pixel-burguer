/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    return config;
  }
};

export default nextConfig;
