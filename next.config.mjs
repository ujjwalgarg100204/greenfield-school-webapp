import { env } from "./src/env.mjs";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/id/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "greenfield-internationls.s3.us-west-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: `${env.AWS_S3_BUCKET_NAME}.s3.${env.AWS_S3_REGION_NAME}.amazonaws.com`,
      },
    ],
  },
  eslint: { ignoreDuringBuilds: true },
};

export default config;
