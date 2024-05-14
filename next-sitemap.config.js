/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://mauladiputra.site',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  };