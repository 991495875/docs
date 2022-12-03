module.exports = {
  title: "Linux技术探索",
  description: "优秀是一种习惯",
  head: [
    ["link", { rel: "icon", href: "/assets/img/logo.png" }],
    [
      "meta",
      {
        name: "keywords",
        content: "linuxcc.cn，Linux技术探索，编程开发，binbin，www.linuxcc.cn",
      },
    ],
  ],
  themeConfig: {
    logo: "/assets/img/logo.png",
    sidebar: "auto",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '更新时间', 
    nav: [
      { text: "首页", link: "/" },
      {
        text: "操作系统",
        items: [
          { text: "Windows", link: "/systems/windows/" },
          { text: "Linux", link: "/systems/linux/" }
        ],
      },
      {
        text: "前端技术",
        items: [
          { text: "HTML", link: "/html/" },
          { text: "CSS", link: "/css/" },
          { text: "JavaScript", link: "/javascript/" },
        ],
      },
      { text: "后端技术", items: [{ text: "ThinkPHP", link: "/php/thinkphp/" }] },
      // { text: "External", link: "https://google.com" },
    ],
  },
};
