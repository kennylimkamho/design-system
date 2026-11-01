import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.PAGES_DEPLOY === 'true' ? { output: 'export', basePath: '/design-system', trailingSlash: true } : {}),
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  experimental: {
    mdxRs: false,
  },
  transpilePackages: ['@design-system/react', '@design-system/tokens'],
};

export default withMDX(nextConfig);