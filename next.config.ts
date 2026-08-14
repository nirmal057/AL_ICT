import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  allowedDevOrigins: [
      "https://6000-firebase-studio-1760711326799.cluster-w5vd22whf5gmav2vgkomwtc4go.cloudworkstations.dev",
  ],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: require.resolve('./loaders/raw-markdown-loader.js'),
    });
    return config;
  },
  turbopack: {
    rules: {
      '*.md': {
        loaders: [require.resolve('./loaders/raw-markdown-loader.js')],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
