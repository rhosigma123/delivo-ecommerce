/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "delivo.com",
        pathname: "**",
      },

      {
        protocol: "http",
        hostname: "192.168.100.103",
        pathname: "**",
      },
    ],
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    BASE_URL: process.env.BASE_URL,
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(node)$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
