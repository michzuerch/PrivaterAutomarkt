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
    path: "/tags/tag4/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/tag5/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/tag6/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/tag7/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/tag8/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/author/troes-retardat/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/author/john-doe/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/category/getting-started/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/category/health/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/author/hans-wurst/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/category/design/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/category/digital/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/category/business/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/posts/suos-novi-data-gente-edaci-custodia-canes/",
    component: c4
  },
  {
    path: "/posts/temptabat-volumina/",
    component: c4
  },
  {
    path: "/posts/troes-retardat/",
    component: c4
  },
  {
    path: "/posts/non-domum-corripuit-loquax-est-geminos-hanc/",
    component: c4
  },
  {
    path: "/posts/styles/",
    component: c4
  },
  {
    path: "/posts/monendo-decimo-referunt-supremum/",
    component: c4
  },
  {
    path: "/posts/iter-vultus-quidem-pariter-caligine-inane-hanc/",
    component: c4
  },
  {
    path: "/posts/et-aequora-inanes-fortuna-non-dextra/",
    component: c4
  },
  {
    path: "/posts/illi-litore/",
    component: c4
  },
  {
    path: "/posts/cunctas-non-toxea-inpatiens-in-virorum-surdaeque/",
    component: c4
  },
  {
    path: "/posts/aera-exspatiantur-impete-inplumes-plebe-capillos-est/",
    component: c4
  },
  {
    path: "/posts/cum-est-bis/",
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
