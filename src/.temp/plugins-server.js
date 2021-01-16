import plugin_gridsome_plugin_tailwindcss_7 from "/home/user/Source/PrivaterAutomarkt/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"
import plugin_gridsome_plugin_flexsearch_12 from "/home/user/Source/PrivaterAutomarkt/node_modules/gridsome-plugin-flexsearch/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_7,
    options: {"tailwindConfig":"./tailwind.config.js","purgeConfig":{"whitelist":["svg-inline--fa","table","table-striped","table-bordered","table-hover","table-sm"],"whitelistPatterns":[{},{},{},{},{},{},{},{}]},"presetEnvConfig":{"stage":0,"autoprefixer":false},"shouldPurge":false,"shouldImport":false,"shouldTimeTravel":false,"shouldPurgeUnusedKeyframes":true}
  },
  {
    run: plugin_gridsome_plugin_flexsearch_12,
    options: {"pathPrefix":"","siteUrl":"https://www.billig-car.de","searchFields":["title","content"],"collections":[{"typeName":"Blog","indexName":"Blog","fields":["title","category","excerpt","content"]}],"chunk":false,"compress":false,"autoFetch":true,"autoSetup":true,"flexsearch":{"profile":"default"}}
  }
]
