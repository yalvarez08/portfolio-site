/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // allow next/image to serve remote images from safelisted domains
        remotePatterns: [
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
            pathname: "/ydcalvarez/**",
          }
        ],
    },
};

export default nextConfig;
