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
        exclude: ['/exclude'],
        config: {
          '/': {
            changefreq: 'weekly',
            priority: 0.5,
            lastmod: '2021-01-07',
          },
          '/cars': {
            changefreq: 'weekly',
            priority: 0.5,
            lastmod: '2021-01-07',
          },
          '/contact': {
            changefreq: 'weekly',
            priority: 0.5,
            lastmod: '2021-01-07',
          },
          '/financing': {
            changefreq: 'weekly',
            priority: 0.5,
            lastmod: '2021-01-07',
          },
          '/impressum': {
            changefreq: 'weekly',
            priority: 0.5,
            lastmod: '2021-01-07',
          },
          '/location': {
            changefreq: 'weekly',
            priority: 0.5,
            lastmod: '2021-01-07',
          },
          '/registration': {
            changefreq: 'weekly',
            priority: 0.5,
            lastmod: '2021-01-07',
          },
          '/services': {
            changefreq: 'weekly',
            priority: 0.5,
            lastmod: '2021-01-07',
          },

        }
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  }
}
