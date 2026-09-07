import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site has no server-side needs, so it exports to plain static files.
  // That keeps it deployable to Vercel, Firebase Hosting, or anything else.
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
