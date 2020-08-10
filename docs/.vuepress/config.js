module.exports = {
  title: 'web-ljy blog',
  description: '个人博客',
  head: [                // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/',            // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false  // 代码块显示行号
  },
  themeConfig: {
    nav: [             // 导航栏配置

      { text: 'Home', link: '/guide/JavaScript/' },
      {
        text: 'About', items: [      // 当提供了一个items数组而不是一个单一的link时，它将显示为一个下拉列表
          { text: 'Chinese', link: '/guide/VUE/postC-1/' },
          { text: 'Japanese', link: '/guide/VUE/postC-2/' }
        ]
      },
    ],
    sidebar: {         // 侧边栏配置
      '/guide/': [
        {
          title: 'JavaScript', 
          collapsable: false,  //是否展开，可折叠
          children: [
            { title: "深拷贝", path: '/guide/JavaScript/postA-1/' },  // 你的md文件地址（可以省略.md 拓展名，同时以 / 结尾的路径将会被视为 */README.md）
            { title: "数组去重", path: '/guide/JavaScript/postA-2/' },
          ]
        },
        {
          title: 'CSS',
          collapsable: true, 
          children: [
            { title: "margin 负值", path: '/guide/CSS/postB-1/' },
            { title: "三角形", path: '/guide/CSS/postB-2/' },
          ]
        },
        {
          title: 'VUE', 
          collapsable: true, 
          children: [
            { title: "插槽", path: '/guide/VUE/postC-1/' },
            { title: "组件", path: '/guide/VUE/postC-2/' },
          ]
        },
      ]
    }, 
    footer: {
      // gitbutton  配置
      gitbtn: {
        // 仓库地址
        repository: "https://ghbtns.com/github-btn.html?user=youdeliang&repo=vuepress-theme-top&type=star&count=true",
        frameborder: 0,
        scrolling: 0,
        width: "80px",
        height: "20px"
      },
      // 添加自定义 footer
      custom: `Copyright &copy; Top Blog 2020 <br /> 
        Theme By <a href="VuePress 中文文档 | VuePress 中文网" target="_blank">VuePress</a>
        | <a href="youdeliang - Overview" target="_blank">youdeliang</a>`,
      // spin: true,
      // theme: 'filled'
    },
    // 分页配置
    pagination: {
      // 每页文章数量
      perPage: 5,
    },
    sidebarDepth: 2,                 // 侧边栏显示2级
    lastUpdated: '上次更新时间',      // 由于 lastUpdated 是基于 git 的, 所以你只能在一个基于 git 的项目中启用它。
    search: true,                    // 禁用或者开启内置搜索框，默认为true  
    //searchMaxSuggestions: 10         // 默认是5    
  },
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 1
    }]
  ]
  // plugins: {
  //   '@vuepress/search': true,
  //   '@vuepress/last-updated': true, // 文章的末尾会自动显示文章的更新日期
  //   '@vuepress/back-to-top': true,  // 回到顶部
  // }
};
