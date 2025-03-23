const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mwesulbn1k.ufs.sh",
        port: "",
        pathname: "/f/**",
      },
      { hostname: "assets.basehub.com" },
      { hostname: "basehub.earth" },
      { hostname: "api.basehub.com" },
    ],
  },
};

export default nextConfig;
