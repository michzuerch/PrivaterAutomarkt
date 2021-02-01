const c1 = () => import(/* webpackChunkName: "page--src--templates--project-vue" */ "/home/user/Source/PrivaterAutomarkt/src/templates/Project.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/home/user/Source/PrivaterAutomarkt/src/templates/Post.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--projects-vue" */ "/home/user/Source/PrivaterAutomarkt/src/pages/Projects.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/home/user/Source/PrivaterAutomarkt/src/pages/Blog.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/user/Source/PrivaterAutomarkt/src/pages/About.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/user/Source/PrivaterAutomarkt/node_modules/gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/user/Source/PrivaterAutomarkt/src/pages/Index.vue")

export default [
  {
    path: "/projects/privater-automarkt/",
    component: c1
  },
  {
    path: "/blog/first-post/",
    component: c2
  },
  {
    path: "/projects/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
