<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
<template>
  <div class="resume">
    <h1 class="name">Amumu</h1>
    <header class="personal-info">
      <a target="_blank" href="https://github.com/chenmh0901">
        <Icon icon="mingcute:github-line" />
        chenmh0901
      </a>
      <a>
        <Icon icon="mingcute:mail-line" />
        13606659286@163.com
      </a>
      <a target="_blank" href="https://niniic.cn">
        <Icon icon="mingcute:book-2-line" />
        博客 niniic.cn
      </a>
      <a>
        <Icon icon="mingcute:location-2-line" />
        浙江 · 杭州
      </a>
    </header>

    <section class="section-block">
      <label>
        <Icon icon="mingcute:bookmarks-line" />
        教育经历
      </label>

      <ul>
        <li>
          <Icon icon="mingcute:diamond-square-line" />
          浙江科技大学 · 数字媒体技术
          <span class="time">2021.09 至 2025.06</span>
        </li>
        <li>班长 · 中共党员</li>
        <li>修读课程: 程序设计基础、高级前端程序设计、计算机网络、数据结构与算法、设计模式、软件工程等</li>
        <li>CET6 FCC响应式网页设计认证</li>
      </ul>
    </section>

    <section class="section-block">
      <label>
        <Icon icon="mingcute:emoji-line" />
        实习经历
      </label>

      <ul>
        <li>
          <Icon icon="mingcute:diamond-square-line" />
          <strong>Fancy时代涌现(AIGC)</strong>
          <span class="time">2024.06 至 2024.08</span>
        </li>

        <li>- 基于 Remotion 平台重构 Java + dicom 医疗信息化业务</li>
        <li>- 负责 Vue3 + TS + Vite 医疗可视化 SPA 开发</li>
      </ul>
    </section>
    <section class="section-block">
      <label>
        <Icon icon="mingcute:terminal-box-line" />
        项目经历
      </label>

      <ul>
        <li>
          <Icon icon="logos:nuxt-icon" />
          <strong>amumu-blog 博客模板</strong>
          <a target="_blank" href="https://niniix.cn">https://niniix.cn</a>
          <span class="time">2024.05 至今</span>
        </li>
        <li>
          基于 Nuxt.js + daisyUI 实现的 SSG 博客模板, ,
          性能极佳且 SEO 友好
        </li>
        <li>已整合 Solid.js 生成动态组件, 并可快速部署到 GitHub Pages 或 Vercel</li>
      </ul>

      <ul>
        <li>
          <Icon icon="logos:nodejs-icon-alt" />
          <strong>GoodsCat 谷子猫</strong>
          <a target="_blank" href="https://goodscat.net">https://goodscat.net</a>
          <span class="time">2024.04 至 2024.07</span>
        </li>
        <li>
          帮助用户快速, 舒心地完成煤炉 (mercari) 平台商品购物, 支持 OneBot, mirai,
          WxPusher, 邮件推送
        </li>
        <li>前端基于 Capacitor + Nuxt.js + UnoCSS 构建多端 release & changelog 流水线，支持 PWA 机制</li>
      </ul>

      <ul>
        <li>
          <Icon icon="logos:nodejs-icon-alt" />
          <strong>EachStar 创作互助平台</strong>
          <a target="_blank" href="https://each-star.com">https://each-star.com</a>
          <span class="time">2022.09 至 2023.03</span>
        </li>
        <li>
          开源互助社区, 基于 GitHub API 开发, 致力于帮助开源项目积累初始影响力
        </li>
        <li>
          技术栈为 Koa + Nuxt, 前端应用 TailwindCSS + ElementPlus 快速开发,
          遵循标准 Git 工作流进行 CD (持续部署)
        </li>
      </ul>

      <ul>
        <li>
          <Icon icon="logos:nodejs-icon-alt" />
          <strong>TomatoMagic 魔法番茄</strong>
          <a target="_blank" href="https://feel.nescraf.cn">https://feel.nescraf.cn</a>
          <span class="time">2024.04 至 2024.06</span>
        </li>
        <li>
          基于难易番茄钟和应用心理学开发, 引导用户利用三分法 + TODO LIST
          帮助建立正向反馈的应用系列
        </li>
        <li>全栈 SSR + tRPC 应用，并通过 svg 算法生成 canvas 图, 用 Three.js 呈现 3D 效果</li>
      </ul>

      <ul>
        <li>
          <Icon icon="logos:nodejs-icon-alt" />
          <strong>ZustCloud 校友录</strong>
          <span class="time">2023.01 至 2024.03</span>
        </li>
        <li>
          帮助校内信息交互的多端应用, 在 Ionic(vue) + Tauri(react) 基础上面向 PC,
          H5, Android 平台持续发布
        </li>
        <li>采用 multi-repo 进行项目管理, 将共用模块抽离为私有 npm 包</li>
      </ul>
    </section>

    <section class="section-block">
      <label>
        <Icon icon="mingcute:braces-line" />知识技能
      </label>

      <ul class="skills">
        <li>
          <Icon icon="mingcute:diamond-square-line" />
          熟悉 Javascript (ES6) 并常用 Typescript 开发
        </li>

        <li>
          <Icon icon="mingcute:diamond-square-line" />
          熟悉 CSS3, Scss 预处理器, 能够熟练使用 UnoCSS / Tailwind CSS
          进行快速开发, 常用 svg, css 动画
        </li>

        <li>
          <Icon icon="mingcute:diamond-square-line" />
          阅读过部分 Vue 源码, 熟悉 Vue 及周边生态如 Nuxt, Vite, Pinia
        </li>

        <li>
          <Icon icon="mingcute:diamond-square-line" />
          了解并常用前端工程化和构建工具, 如 Vite, ESLint, Prettier, Rollup,
          Webpack
        </li>

        <li>
          <Icon icon="mingcute:diamond-square-line" />
          接触过全栈场景, 了解 Ktor, Node.js, Nest.js, Nuxt.js, Next.js
        </li>

        <li>
          <Icon icon="mingcute:diamond-square-line" />
          熟悉敏捷开发的方式与流程, 了解 Git flow, GitHub Actions, Docker, CI/CD,
          Nginx, RabbitMQ, Monorepo
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped lang="scss">
.resume {
  @apply pt-4 w-full;

  .icon {
    @apply text-4xl pb-1 pl-1 mb-2;
    @apply border-b-[2px] font-[600];
  }

  .personal-info {
    @apply flex flex-wrap pl-5;

    a {
      @apply w-1/3 p-1 flex items-center gap-1;
      @apply hover:text-purple-500 cursor-pointer transition-all;
      list-style: none;

      svg {
        @apply size-[18px];
      }
    }
  }

  .section-block {
    @apply my-6;

    label {
      @apply border-b-[1px] border-gray-200 pb-1 pl-1 mb-2;
      @apply text-[18px] font-[600];
      @apply flex items-center gap-1;
    }

    svg {
      @apply size-[32px];
    }

    ul {
      @apply pl-6;

      li {
        @apply w-full flex items-center gap-3 relative pl-5;

        strong {
          @apply font-[600];
        }

        a {
          @apply text-purple-400 font-normal;
          @apply hover:text-purple-300 cursor-pointer transition-all;
        }

        svg {
          @apply size-[16px] text-[#333] absolute left-[-2px];
        }
      }

      .time {
        @apply ml-auto mr-3;
        letter-spacing: 0.5px;
      }
    }

    ul+ul {
      @apply mt-2;
    }

    ul.skills {
      li {
        @apply my-[2px];
      }
    }
  }
}

.unique-border-owner {
  @apply border-t-[1px] border-dashed border-purple-600;
}
</style>
