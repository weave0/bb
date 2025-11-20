/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.bbrown.com'],
  },
  i18n: {
    locales: ['en', 'es', 'fr', 'de', 'zh', 'ja', 'ar'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
