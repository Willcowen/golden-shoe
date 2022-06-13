module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Will Cowen`,
        short_name: 'Portfolio',
        start_url: '/',
        icon: 'src/images/mylogo.jpg'
      },
    },
],
  siteMetadata: {
    title: `Will Cowen`,
    siteUrl: `http://www.willcowen.co.uk`,
    description: `Will's personal website`,
  },
}
