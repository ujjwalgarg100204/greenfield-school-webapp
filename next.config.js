/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextIntl = require('next-intl/plugin')(
	'./src/i18n.ts'
);

module.exports = withNextIntl(nextConfig);
