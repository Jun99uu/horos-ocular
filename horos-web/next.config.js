/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["i.pinimg.com", "horosocular.s3.ap-northeast-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
