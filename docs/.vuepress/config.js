import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'

export default defineUserConfig({
  
  base: '/study-notes/',
  lang: 'zh-CN',

  title: 'LiZhou 学习笔记',
  description: 'LiZhou Study Notes',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      { text: 'Github', link: 'https://www.github.com/Z-MA' },
      { text: 'Gitee', link: 'https://www.Gitee.com/Z-MA' },
      { text: 'VuePress', link: 'https://vuejs.press/zh/' },
    ],

    sidebar: {
      '/Base/': [
        {
          text: 'Base',
          // collapsible: true,
          // 相对路径会自动追加子路径前缀
          children: ['01_Math','02_Physics','03_mechanics','04_Control','06_Electronics'],
        },
      ],
      '/Design/': [
        {
          text: 'Design',
          // collapsible: true,
          // 相对路径会自动追加子路径前缀
          children: ['01_Design','02_CAX','03_DDC','04_TOOL'],
        },
      ],
      '/Embeded/': [
        {
          text: 'Embeded',
          // collapsible: true,
          children: [
            {
              text: 'Code',
              prefix: '01_Code/',
              collapsible: true,
              children: ['001_C','002_Python','003_Rust','004_Matlab','009_DevTool','010_VersionControlSystem','020_ComputerSystem','021_Algorithms','022_DesignMode'],
            },
            // {
            //   text: 'System',
            //   prefix: '02_System/',
            //   collapsible: true,
            //   children: ['001_C','002_Python','003 Rust','004 Matlab','009 DevTool','010 VersionControlSystem','020_ComputerSystem','021 Algorithms','022 DesignMode'],
            // },
            // {
            //   text: 'SOC',
            //   prefix: '03_SOC/',
            //   collapsible: true,
            //   children: ['001_C','002_Python','003 Rust','004 Matlab','009 DevTool','010 VersionControlSystem','020_ComputerSystem','021 Algorithms','022 DesignMode'],
            // },
            // {
            //   text: 'Driver',
            //   prefix: '04_Driver/',
            //   collapsible: true,
            //   children: ['001_C','002_Python','003 Rust','004 Matlab','009 DevTool','010 VersionControlSystem','020_ComputerSystem','021 Algorithms','022 DesignMode'],
            // },
            // {
            //   text: 'Hardware',
            //   prefix: '05_Hardware/',
            //   collapsible: true,
            //   children: ['001_C','002_Python','003 Rust','004 Matlab','009 DevTool','010 VersionControlSystem','020_ComputerSystem','021 Algorithms','022 DesignMode'],
            // },
            // {
            //   text: 'Field',
            //   prefix: '06_Field/',
            //   collapsible: true,
            //   children: ['001_C','002_Python','003 Rust','004 Matlab','009 DevTool','010 VersionControlSystem','020_ComputerSystem','021 Algorithms','022 DesignMode'],
            // },
            {
              text: 'Motor',
              prefix: '10_Motor/',
              collapsible: true,
              children: ['00_Motor','01_Base','03_永磁10讲','10_FOC','11_TIMER','20_MC_FOC','30_HW'],
            },
          ],
        },
      ],
    }

  }),

  plugins: [
    markdownMathPlugin({
      // 选项
    }),
  ],

  bundler: webpackBundler(),
})
