const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/home/user/Source/PrivaterAutomarkt/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--author-vue" */ "/home/user/Source/PrivaterAutomarkt/src/templates/Author.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--category-vue" */ "/home/user/Source/PrivaterAutomarkt/src/templates/Category.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/home/user/Source/PrivaterAutomarkt/src/templates/BlogPost.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--infinity-vue" */ "/home/user/Source/PrivaterAutomarkt/src/pages/Infinity.vue")
const c6 = () => import(/* webpackChunkName: "page--src--templates--custom-page-vue" */ "/home/user/Source/PrivaterAutomarkt/src/templates/CustomPage.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/user/Source/PrivaterAutomarkt/node_modules/gridsome/app/pages/404.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/user/Source/PrivaterAutomarkt/src/pages/Index.vue")

export default [
  {
    path: "/tags/tag1/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/tag2/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/tag3/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/author/michael-zuercher/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/author/manfred/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/category/getting-started/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/category/digital/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/posts/et-aequora-inanes-fortuna-non-dextra/",
    component: c4
  },
  {
    path: "/posts/featured/",
    component: c4
  },
  {
    path: "/posts/dederis-faciem/",
    component: c4
  },
  {
    path: "/infinity/:page(\\d+)?/",
    component: c5
  },
  {
    path: "/zulassung/",
    component: c6
  },
  {
    path: "/standort/",
    component: c6
  },
  {
    path: "/kontakt/",
    component: c6
  },
  {
    path: "/impressum/",
    component: c6
  },
  {
    path: "/finanzierung/",
    component: c6
  },
  {
    path: "/dienstleistungen/",
    component: c6
  },
  {
    path: "/about-us/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
