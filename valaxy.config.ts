import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonLightGallery } from 'valaxy-addon-lightgallery'



// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '原神是一款：',
    },

    pages: [
      {
        name: 'My Friend',
        url: '/links/',
        icon: 'i-line-md-account',
        color: 'dodgerblue',
      },
      {
        name: '相册集',
        url: '/albums/',
        icon: 'i-line-md-image-filled',
        color: 'black',
      },
      {
        name: 'My Love',
        url: '/girls/',
        icon: 'i-line-md-heart-filled',
        color: 'hotpink',
      },

    ],

    footer: {
      since: 2012,
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
    },
  },

  unocss: { safelist },
  addons: [
    addonLightGallery(),
  ],
})
