/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/personal-website",
  siteMetadata: {
    title: `Yuji Oshiro`,
    siteUrl: `https://yujioshiro.com`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/content"
    },
    __key: "pages"
  },
  {
    resolve: "gatsby-plugin-web-font-loader",
    options: {
      typekit: {
        id: "wpe2wac",
      },
    },
  },
  `gatsby-transformer-remark`,
  {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      trackingIds: [
        "G-0RWZVT3H8E"
      ],
    },
  }]
};