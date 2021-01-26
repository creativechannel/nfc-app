module.exports = {
  siteMetadata: {
    title: `CCS NFC Demo`,
    description: `This is a Retailer Xpert Contact Info Demo for Creative Channel Services`,
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
        name: "NFC App",
        short_name: "NFC App",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`
      }
    },
    `gatsby-plugin-offline`,
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
        bucketName: "nfc-xpert"
      }
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://drupal-dev.eba-fkhp4mkr.us-east-1.elasticbeanstalk.com/`,
      },
    }
  ]
}
