// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Privater Automarkt',
  siteDescription: 'Webpage für Privater Automarkt in Radolfzell',
  siteUrl: 'https://billig-car.de',
  plugins: [
      {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/exclude-me'],
        config: {
          '/articles/*': {
            changefreq: 'weekly',
            priority: 0.5,
            lastmod: '2020-02-19',
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: '2020-05-12',
          }
        }
      }
    }
  ]
}
