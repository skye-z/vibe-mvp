import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'VibeMVP',
  description: 'MVP-style project management and documentation plugin for OpenCode',

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      themeConfig: {
        nav: [
          { text: '指南', link: '/guide/getting-started' },
          { text: '路线图', link: '/roadmap/' }
        ],
        sidebar: {
          '/guide/': [
            {
              text: '指南',
              items: [
                { text: '快速开始', link: '/guide/getting-started' }
              ]
            }
          ],
          '/roadmap/': [
            {
              text: '路线图',
              items: [
                { text: 'v0.1', link: '/roadmap/v0-1' }
              ]
            }
          ]
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/getting-started' },
          { text: 'Roadmap', link: '/en/roadmap' }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Getting Started', link: '/en/guide/getting-started' }
              ]
            }
          ],
          '/en/roadmap/': [
            {
              text: 'Roadmap',
              items: [
                { text: 'v0.1', link: '/en/roadmap/v0-1' }
              ]
            }
          ]
        }
      }
    }
  },



  themeConfig: {
    logo: '/opencode.svg',
    siteTitle: 'VibeMVP',
    nav: [
      { text: 'Guide', link: '/en/guide/' },
      { text: 'Roadmap', link: '/en/roadmap/' }
    ],
    sidebar: {
      '/en/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/en/guide/' },
            { text: 'Getting Started', link: '/en/guide/getting-started' },
            { text: 'Commands', link: '/en/guide/commands' },
            { text: 'Configuration', link: '/en/guide/configuration' }
          ]
        }
      ],
      '/en/roadmap/': [
        {
          text: 'Roadmap',
          items: [
            { text: 'Overview', link: '/en/roadmap/' },
            { text: 'v1.0', link: '/en/roadmap/v1.0' },
            { text: 'v1.5', link: '/en/roadmap/v1.5' },
            { text: 'v2.0', link: '/en/roadmap/v2.0' },
            { text: 'v3.0', link: '/en/roadmap/v3.0' }
          ]
        }
      ],
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '命令参考', link: '/guide/commands' },
            { text: '配置', link: '/guide/configuration' }
          ]
        }
      ],
      '/roadmap/': [
        {
          text: '路线图',
          items: [
            { text: '概览', link: '/roadmap/' },
            { text: 'v1.0', link: '/roadmap/v1.0' },
            { text: 'v1.5', link: '/roadmap/v1.5' },
            { text: 'v2.0', link: '/roadmap/v2.0' },
            { text: 'v3.0', link: '/roadmap/v3.0' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/skye-z/vibe-mvp' }
    ]
  }
})
