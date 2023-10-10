/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/id/**",
      },
    ],
  },
};

const withNextIntl = require("next-intl/plugin")("./src/i18n.ts");

module.exports = withNextIntl(nextConfig);
