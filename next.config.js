/** @type {import('next').NextConfig} */
const DIRECTUS_CDN_HOSTNAME =
  process.env.NEXT_PUBLIC_DIRECTUS_CDN_HOSTNAME || "app.watarrow.com";

module.exports = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: [
          {
            loader: "@svgr/webpack",
            options: { icon: true, dimensions: false },
          },
        ],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  reactStrictMode: true,

  async redirects() {
    return [
      // The old /team page is now the home page
      {
        source: "/team",
        destination: "/",
        permanent: true,
      },

      {
        source: "/planes",
        destination: "/aircraft",
        permanent: true,
      },

      {
        source: "/aircrafts",
        destination: "/aircraft",
        permanent: true,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: DIRECTUS_CDN_HOSTNAME,
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};
