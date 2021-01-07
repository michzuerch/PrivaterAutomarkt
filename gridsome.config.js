// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_globals.sass'),
        // or if you use scss
        path.resolve(__dirname, './src/assets/sass/_globals.scss'),
        // you can also use a glob if you'd prefer
        path.resolve(__dirname, './src/assets/sass/*.sass'),
        // or scss
        path.resolve(__dirname, './src/assets/sass/*.scss'),
      ],
    })
}

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
  },
    chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
        addStyleResource(config.module.rule('sass').oneOf(type))
    })

    // or if you use scss
    types.forEach(type => {
        addStyleResource(config.module.rule('scss').oneOf(type))
    })
    }
}
