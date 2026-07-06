import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    qualities: [75, 100],
    minimumCacheTTL: 60,
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  async redirects() {
    return [
      // Home já cobre o conteúdo de "Sobre" — remover esta entrada reativa a rota /sobre.
      {
        source: "/sobre",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
