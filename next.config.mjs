/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "html", "ts", "tsx"],
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
