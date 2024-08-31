import { katex } from '@mdit/plugin-katex'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Signals and Systems",
  description: "A note for MIT 6.007 by JouderMin",
  cleanUrls: true,
  srcDir: "./doc",
  base: "/signals-and-systems/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Index', link: '/' },
      { text: 'Note', link: '/lec 1' }
    ],

    sidebar: [
      {
        text: 'Notes',
        items: [
          { text: 'Lec 1: Introduction', link: '/lec 1' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(katex)
    }
  }
})
