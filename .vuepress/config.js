module.exports = {
  title: "jing-blog",
  description: "this is a blog",
  base:'/jing-byte.github.io/',
  dest: "public",
  head: [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  theme: "reco",
  locales: {
      '/': {
        "lang": 'zh-CN'
      }
  },
  themeConfig: {
    sidebarDepth: 3,
    navBar: true,
    lastUpdated: '上次更新',
    nav: [//导航栏
      {
        text: "js",
        items: [
          { text: 'js杂记', link: '/src/js/js' },
          // { text: '解决跨域', link: '/basis/CrossDomain' },
        ]
        // "link": "/",
        // "items": [
        //   {
        //     "text": "vuepress-reco",
        //     "link": "/docs/theme-reco/"
        //   }
        // ]
      },
      // {
      //   "text": "TimeLine",
      //   "link": "/timeline/",
      // },
      // {
      //   "text": "Docs",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
      // {
      //   "text": "Contact",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "GitHub",
      //       "link": "https://github.com/recoluan",
      //       "icon": "reco-github"
      //     }
      //   ]
      // }
    ],
    sidebar: {
      "/docs/theme-reco/":genSidebarConfig('js杂记',['js'])
      // "/docs/theme-reco/": [
      //   "",
      //   "theme",
      //   "plugin",
      //   "api"
      // ]
      

    },
    type: "blog",
    blogConfig: {
      "category": {
        "location": 2,
        "text": "Category"
      },
      tag: {
        "location": 3,
        "text": "Tag"
      }
    },
    friendLink: [//友链
      // {
      //   "title": "午后南杂",
      //   "desc": "Enjoy when you can, and endure when you must.",
      //   "email": "1156743527@qq.com",
      //   "link": "https://www.recoluan.com"
      // },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "air",
    authorAvatar: "/avatar.png",
    record: "xxxx",
    startYear: "2017"
  },
  markdown: {
    "lineNumbers": true
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        dateOptions: {
          hour12: false
        }
      }
    ]
  ]
}
function genSidebarConfig(title, children) {
  return [
    { title, children }
  ]
}