import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        unoptimized: true,
    },
    output: process.env.NEXT_CONFIG_OUTPUT as NextConfig["output"],
};

export default nextConfig;
