const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`
})

module.exports = {
  siteMetadata: {
    title: `Ask an Expert`,
    description: `This is a Retailer Xpert Contact Info Demo from Creative Channel Services`,
    author: `Mario Morales`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ask an Expert",
        short_name: "Ask an Expert",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "src/images/aae_icon.png"
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/market/*`]
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "nfc-xpert",
        protocol: "https",
        hostname: "contap.co"
      }
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.GATSBY_API_URL,
        basicAuth: {
          username: process.env.BASIC_AUTH_USERNAME,
          password: process.env.BASIC_AUTH_PASSWORD
        },
        headers: {
          "X-Consumer-ID": "ff4f89ed-b4c9-45d4-bc68-3e4511b5e3ed"
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_TRACKING_ID, // Google Analytics / GA
          process.env.AW_CONVERSION_ID, // Google Ads / Adwords / AW
          process.env.DC_FLOODIGHT_ID // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ]
      }
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "NodeMarket",
        imagePath: "field_profile_picture.imageDerivatives.links.profile_picture.href",
        auth: {
          htaccess_user: process.env.BASIC_AUTH_USERNAME,
          htaccess_pass: process.env.BASIC_AUTH_PASSWORD
        }
      }
    }
  ]
}
