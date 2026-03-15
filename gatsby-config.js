/* eslint-disable prettier/prettier */
const sass = require(`sass`);

module.exports = {
  pathPrefix: `/lp-site`,
  siteMetadata: {
    title: `lp-site | gatsby starter blog`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: sass
      }
    }
  ]
};
