import nextra from 'nextra';

const withMDX = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withMDX(nextConfig);
