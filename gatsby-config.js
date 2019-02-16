module.exports = {
  pathPrefix: '/river',
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/layout/typography`,
      },
    },
  ],
}
