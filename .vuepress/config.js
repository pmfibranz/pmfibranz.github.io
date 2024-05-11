import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Philip Fibranz',
  // description: 'About Me',
  base: '/',
  theme: defaultTheme({}),
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
})
