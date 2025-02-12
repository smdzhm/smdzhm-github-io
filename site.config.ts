import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://valaxy.site/',
  lang: 'zh-CN',
  title: 'RainbowSky的博客|RainbowSky\'s blog',
  author: {
    name: 'RainbowSky',
    avatar: 'https://i.postimg.cc/65xP2FCQ/20250111162708.jpg',
    status:
    {
      emoji: '🤣',
      message: '在线'
  }},
  mode: 'auto',
  lastUpdated: true,
  favicon: 'https://i.postimg.cc/65xP2FCQ/20250111162708.jpg',
  description: 'RainbowSkyのblog.',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ 2741666788',
      link: 'https://i.postimg.cc/mDdNDtxv/qrcode-1739081829874.jpg',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/smdzhm',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: 'https://y.music.163.com/m/user?id=12338724138',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/cnxe0k',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/1228387672',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/smdzhm',
      icon: 'i-ri-twitter-x-fill',
      color: 'black',
    },
    {
      name: 'E-Mail',
      link: 'mailto:2741666788@qq.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'discord',
      link: 'https://discord.gg/97RPrfs5U6',
      icon: 'i-line-md-discord',
      color: '#7B68EE',
    },
    {
      name: 'telegram频道',
      link: 'https://t.me/rainbowsky1145',
      icon: 'i-line-md-telegram',
      color: '#0084FF',
    },
    {
      name: '微信支付',
      link: 'https://i.postimg.cc/52xkpv7d/E81-F46-EFC219-CF13-CD737-F6-DD7438514.jpg',
      icon: 'i-ri-wechat-pay-line',
      color: '#2DC100',
    },
  ],

  search: {
    enable: true,
    type: 'fuse',
  },



  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '微信支付',
        url: 'https://i.postimg.cc/52xkpv7d/E81-F46-EFC219-CF13-CD737-F6-DD7438514.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
  })
