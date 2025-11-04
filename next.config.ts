import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        unoptimized: true,
    },
    output: process.env.NEXT_CONFIG_OUTPUT as NextConfig["output"],
    distDir: process.env.NEXT_CONFIG_DISTDIR,
    basePath: "/portal",
};

export default nextConfig;
