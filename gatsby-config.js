/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/personal-website",
  siteMetadata: {
    title: `Yuji Oshiro`,
    siteUrl: `https://yujioshiro.com`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-netlify",
  {
    resolve: "gatsby-plugin-web-font-loader",
    options: {
      typekit: {
        id: "wpe2wac",
      },
    },
  },
  {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      trackingIds: [
        "G-0RWZVT3H8E"
      ],
    },
  }]
};