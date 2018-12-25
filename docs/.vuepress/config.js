module.exports = {
  title: 'coder',
  description: '程序猿',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/book/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    // displayAllHeaders: true,
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav:[
      {
        text: '文档手册',
        items: [
          { text: 'Git操作', link: '/git/'}, // 内部链接 以docs为根目录
          { text: 'JavaScript', link: '/JavaScript/' }
        ]
      },
      { text: '博客', link: 'http://blog.coderdong.cn/blog/' }, // 外部链接
      // 下拉列表
      {
        text: '代码仓库',
        items: [
          { text: '高仿微信', link: 'https://github.com/HomeSquat/WChat-web' },
        ]
      }
    ],
    sidebar: {
      '/git/': [
        '',     /* /foo/ */
        'one'  /* /foo/one.html */
      ],
      '/JavaScript/': [
          ''
      ]
    }
  }
};
