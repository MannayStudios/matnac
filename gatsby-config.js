module.exports = {
  plugins: [
    '@msallent/gatsby-theme-skeleton-core',
    '@msallent/gatsby-theme-skeleton-seo',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets',
      },
    },
  ],
};
