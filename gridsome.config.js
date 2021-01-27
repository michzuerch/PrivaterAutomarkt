module.exports = {
  siteName: "Privater Automarkt Radolfzell",
  siteDescription: "Privat an Privat = günstig",
  siteUrl: "https://billig.car.de",
  icon: "src/favicon.png",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        purgeConfig: {
          whitelist: [
            "svg-inline--fa",
            "table",
            "table-striped",
            "table-bordered",
            "table-hover",
            "table-sm",
          ],
          whitelistPatterns: [
            /fa-$/,
            /blockquote$/,
            /code$/,
            /pre$/,
            /table$/,
            /table-$/,
            /vueperslide$/,
            /vueperslide-$/,
          ],
        },
        presetEnvConfig: {},
        shouldPurge: false,
        shouldImport: false,
        shouldTimeTravel: false,
        shouldPurgeUnusedKeyframes: true,
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        exclude: ["/exclude-me"],
        config: {
          "/*": {
            changefreq: "weekly",
            priority: 0.5,
            lastmod: "2021-01-25",
          },
          "/posts/*": {
            changefreq: "daily",
            priority: 0.7,
            lastmod: "2021-01-25",
          },
        },
      },
    },
    {
      use: "gridsome-plugin-robots",
      options: {
        host: "https://billig-car.de",
        sitemap: "https://billig-car.de/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      use: "gridsome-source-static-meta",
      options: {
        path: "content/site/*.json",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Author",
        path: "./content/author/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Blog",
        path: "./content/blog/**/*.md",
        refs: {
          author: "Author",
          tags: {
            typeName: "Tag",
            create: true,
          },
          category: {
            typeName: "Category",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "CustomPage",
        path: "./content/pages/*.md",
      },
    },
    {
      use: "gridsome-plugin-flexsearch",
      options: {
        searchFields: ["title", "content"],
        collections: [
          {
            typeName: "Blog",
            indexName: "Blog",
            fields: ["title", "category", "excerpt", "content"],
          },
          {
            typeName: "CustomPage",
            indexName: "CustomPage",
            fields: ["title", "excerpt", "content"],
          },
        ],
      },
    },
  ],
  transformers: {
    remark: {
      plugins: [
        "remark-autolink-headings",
        "remark-attr",
        [
          "gridsome-plugin-remark-prismjs-all",
          {
            noInlineHighlight: false,
            showLineNumbers: false,
          },
        ],
        require("./packages/gridsome-plugin-remark-figure"),
      ],

      processImages: false,
    },
  },
  templates: {
    Blog: [
      {
        path: "/posts/:title",
      },
    ],
    CustomPage: [
      {
        path: "/:title",
        component: "~/templates/CustomPage.vue",
      },
    ],
    Category: [
      {
        path: "/category/:title",
        component: "~/templates/Category.vue",
      },
    ],
    Author: [
      {
        path: "/author/:name",
        component: "~/templates/Author.vue",
      },
    ],
    Tag: [
      {
        path: "/tags/:title",
        component: "~/templates/Tag.vue",
      },
    ],
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@pageImage", "@/assets/images");
  },
};
