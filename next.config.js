// /** @type {import('next').NextConfig} */

// const {i18n} =require ('./next-i18next.config')
// const nextConfig = {
//   reactStrictMode: true,
//   i18n,
 
// }

// module.exports = nextConfig

// const { i18n } = require('./next-i18next.config');

// module.exports = {
//   reactStrictMode: true,
//   i18n
// };
// next.config.js




// const { i18n } = require('./next-i18next.config.js');

// module.exports = {
//   reactStrictMode: true,
//   i18n,
// };

// module.exports = {
//   reactStrictMode: true,
//   i18n: {
//     locales: ['en', 'ar', 'sv'],
//     defaultLocale: 'en',
//     localeDomain: [
//       {
//         domain: 'example.com',
//         defaultLocale: 'en',
//       },
//       {
//         domain: 'ar.example.com',
//         locale: 'ar',
//       },
//       {
//         domain: 'sv.example.com',
//         locale: 'sv',
//       },
//     ],
//   },
// };

module.exports = {
  images: {
    domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'],
  },
  i18n: {
    locales: ["en", "ar","sv"],
    defaultLocale: "en",
  },
};

