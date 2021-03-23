const fs = require('fs');

function getChildren(path) {
  let files = fs.readdirSync(path);
  let list = [];
  for (let i in files) {
    let filename = files[i].split('.').slice(0, -1).join('.');
    if (filename.toLowerCase() !== 'readme') {
      list.push(filename);
    }
  }
  console.log(`${path}: `, list);
  return list;
}

module.exports = {
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/notosanstc.css?display=swap' }],
  ],
  title: 'Note筆記',
  description: '各式各樣的筆記',
  base: '/vuepress/',
  repo: 'https://github.com/hmlu36/note',
  extend: '@vuepress/theme-default',
  themeConfig: {
    sidebar: require('./sidebar'),
    nav: [{ text: '首頁', link: '/' }],
    lastUpdated: false, // string | boolean
    // default value is true. Set it to false to hide next page links on all pages
    //nextLinks: false,
    // default value is true. Set it to false to hide prev page links on all pages
    //prevLinks: false,
    smoothScroll: true,
  },
  markdown: {
    lineNumbers: true, // 是否顯示行號
  },
  sidebar: 'auto', // 側邊攔配置
  sidebarDepth: 2,
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    '@vuepress/blog',
    '@vuepress/back-to-top',
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10,
      },
    ]
  ],
};
