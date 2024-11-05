import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  productionBrowserSourceMaps: true,
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias["@styles"] = path.join(__dirname, "src/styles");

    if (!isServer) {
      config.module.rules.push({
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        use: [
          {
            loader: "thread-loader",
            options: {
              workers: 4,
            },
          },
        ],
      });
    }

    if (dev && !isServer) {
      const sassRule = config.module.rules.find(
        (rule) => rule.test && rule.test.toString().includes("scss")
      );
      if (sassRule) {
        sassRule.use.push({
          loader: "sass-resources-loader",
          options: {
            resources: [path.join(__dirname, "src/styles/main.scss")],
          },
        });
      }
    }

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};

export default nextConfig;
