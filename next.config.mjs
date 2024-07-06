/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/help",
        destination: "/help/faq",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
