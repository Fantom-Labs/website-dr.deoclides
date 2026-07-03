import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    qualities: [75, 100],
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
