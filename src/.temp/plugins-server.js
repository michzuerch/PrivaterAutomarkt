import plugin_gridsome_plugin_tailwindcss_5 from "/home/user/Source/PrivaterAutomarkt/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"
import plugin_gridsome_plugin_netlify_cms_8 from "/home/user/Source/PrivaterAutomarkt/node_modules/gridsome-plugin-netlify-cms/gridsome.client.js"
import plugin_gridsome_plugin_flexsearch_15 from "/home/user/Source/PrivaterAutomarkt/node_modules/gridsome-plugin-flexsearch/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_5,
    options: {"tailwindConfig":"./tailwind.config.js","purgeConfig":{"whitelist":["svg-inline--fa","table","table-striped","table-bordered","table-hover","table-sm"],"whitelistPatterns":[{},{},{},{},{},{},{},{}]},"presetEnvConfig":{"stage":0,"autoprefixer":false},"shouldPurge":false,"shouldImport":false,"shouldTimeTravel":false,"shouldPurgeUnusedKeyframes":true}
  },
  {
    run: plugin_gridsome_plugin_netlify_cms_8,
    options: {"publicPath":"/admin","htmlTitle":"Content Editor","configPath":"src/admin/config.yml","modulePath":"/home/user/Source/PrivaterAutomarkt/node_modules/gridsome-plugin-netlify-cms/lib/cms.js","htmlPath":"/home/user/Source/PrivaterAutomarkt/node_modules/gridsome-plugin-netlify-cms/templates/index.html","injectScript":true,"enableIdentityWidget":true,"debug":false}
  },
  {
    run: plugin_gridsome_plugin_flexsearch_15,
    options: {"pathPrefix":"","siteUrl":"https://billig.car.de","searchFields":["title","content"],"collections":[{"typeName":"Blog","indexName":"Blog","fields":["title","category","excerpt","content"]},{"typeName":"CustomPage","indexName":"CustomPage","fields":["title","excerpt","content"]}],"chunk":false,"compress":false,"autoFetch":true,"autoSetup":true,"flexsearch":{"profile":"default"}}
  }
]
