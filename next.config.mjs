/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: () => [
        {
            source: "/:path*",
            headers: [
              {
                key: "Cache-Control",
                value: "no-store",
              },
              {
                key: "Cross-Origin-Opener-Policy",
                value: "same-origin allow-popups",
              },
            ],
          },
    ],
    images: {
        domains: ['media.licdn.com','gravatar.com'],
    },

};

export default nextConfig;
