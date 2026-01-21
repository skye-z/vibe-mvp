import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "++projectName++",
  description: "++description++",

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/getting-started' },
          {
            text: 'Modules',
            items: [
              { text: 'Module 1', link: '/modules/module1' }
            ]
          },
          { text: 'Roadmap', link: '/roadmap/target' }
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Getting Started', link: '/guide/getting-started' }
              ]
            }
          ],
          '/modules/': [
            {
              text: 'Modules',
              items: [
                { text: 'Module 1', link: '/modules/module1' }
              ]
            }
          ],
          '/roadmap/': [
            {
              text: 'Roadmap',
              items: [
                { text: 'Target', link: '/roadmap/target' },
                { text: 'v0.1', link: '/roadmap/v0-1' }
              ]
            }
          ]
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh/guide/getting-started' },
          {
            text: '模块',
            items: [
              { text: 'Module 1', link: '/zh/modules/module1' }
            ]
          },
          { text: '路线图', link: '/zh/roadmap/target' }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              text: '指南',
              items: [
                { text: '快速开始', link: '/zh/guide/getting-started' }
              ]
            }
          ],
          '/zh/modules/': [
            {
              text: '模块',
              items: [
                { text: '模块1', link: '/zh/modules/module1' }
              ]
            }
          ],
          '/zh/roadmap/': [
            {
              text: '路线图',
              items: [
                { text: '目标', link: '/zh/roadmap/target' },
                { text: 'v0.1', link: '/zh/roadmap/v0-1' }
              ]
            }
          ]
        }
      }
    }
  },


  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'VibeMVP',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Modules', link: '/modules/' },
      { text: 'Roadmap', link: '/roadmap/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' }
          ]
        }
      ],
      '/modules/': [
        {
          text: 'Modules',
          items: [
            { text: 'Index', link: '/modules/' },
            { text: 'Module 1', link: '/modules/module1' }
          ]
        }
      ],
      '/roadmap/': [
        {
          text: 'Roadmap',
          items: [
            { text: 'Overview', link: '/roadmap/' },
            { text: 'Target', link: '/roadmap/target' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/skye-z/vibemvp' }
    ]
  }
})
