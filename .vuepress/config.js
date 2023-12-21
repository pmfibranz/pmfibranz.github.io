import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Philip Fibranz',
  // description: 'About Me',
  base: '/',
  theme: defaultTheme({
    contributors: false
  })
})
