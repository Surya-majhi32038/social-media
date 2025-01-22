import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // for external image only 
  images: {
    remotePatterns:[
        {
            protocol:"https",
            hostname:"images.pexels.com"
        }
    ]
  }
};

export default nextConfig;
