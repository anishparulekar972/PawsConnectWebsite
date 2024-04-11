import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  rewrites() {
    return [
      {
        source: '/server/:path*',
        destination: 'http://localhost:4040/api/:path*',
      },
    ];
  }
});
