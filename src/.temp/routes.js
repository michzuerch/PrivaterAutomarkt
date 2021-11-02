const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/home/michzuerch/Source/PrivaterAutomarkt/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--category-vue" */ "/home/michzuerch/Source/PrivaterAutomarkt/src/templates/Category.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--author-vue" */ "/home/michzuerch/Source/PrivaterAutomarkt/src/templates/Author.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/home/michzuerch/Source/PrivaterAutomarkt/src/templates/BlogPost.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--infinity-vue" */ "/home/michzuerch/Source/PrivaterAutomarkt/src/pages/Infinity.vue")
const c6 = () => import(/* webpackChunkName: "page--src--templates--custom-page-vue" */ "/home/michzuerch/Source/PrivaterAutomarkt/src/templates/CustomPage.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--location-vue" */ "/home/michzuerch/Source/PrivaterAutomarkt/src/pages/Location.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/home/michzuerch/Source/PrivaterAutomarkt/src/pages/404.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/michzuerch/Source/PrivaterAutomarkt/src/pages/Index.vue")

export default [
  {
    path: "/tags/verkauf/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/sportwagen/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/classic-cars/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/category/sportwagen/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/tags/autohandel/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/author/michael-zuercher/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/author/manfred/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/category/gebrauchtwagen/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/category/classic-cars/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/posts/sportwagen/",
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
    path: "/location/",
    component: c7
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
    name: "404",
    path: "/404/",
    component: c8
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c9
  },
  {
    name: "*",
    path: "*",
    component: c8
  }
]
