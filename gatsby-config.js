require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: '技術ブログ ',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-code-titles',
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // classPrefix: "language-",
              // inlineCodeMarker: null,
              // aliases: {},
              showLineNumbers: true,
              // noInlineHighlight: false,
              // languageExtensions: [
              //   {
              //     language: "superscript",
              //     extend: "javascript",
              //     definition: {
              //       superscript_types: /(SuperType)/,
              //     },
              //     insertBefore: {
              //       function: {
              //         superscript_keywords: /(superif|superelse)/,
              //       },
              //     },
              //   },
              // ],
            }
          }
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    }
  ],
}
