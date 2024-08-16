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
          <strong>时代涌现信息科技(南京)有限公司(AIGC)</strong>
          <span class="time">2024.06 至 2024.08</span>
        </li>

        <li>- 基于 Remotion 引擎,采用 React + TS 将 Remotion 组件层进行重新封装,自定义组件的参数和类型以及封装组件的CSS样式和动画库,
          最终使用 JSON 对象参数化制作视频模版</li>
        <li>- 采用 React + Vite + Antd + TailwindCSS 构建视频模版管理平台,支持长列表触底懒加载和视频图片预览</li>
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
          基于 Nuxt.js + daisyUI + TailwindCSS 实现的 SSG 博客模板,支持Markdown编辑和预览,性能极佳且 SEO 友好
        </li>
        <li>采用 Github Action 支持CI/CD自动部署服务器</li>
      </ul>

      <ul>
        <li>
          <Icon icon="logos:react" />
          <strong>CSSAniGallery CSS动画展览</strong>
          <a target="_blank" href="https://niniix.cn/cssanimation">https://niniix.cn/cssanimation</a>
          <span class="time">2024.04 至 2024.06</span>
        </li>
        <li>
          一个简洁的 CSS 动画学习网站, 每个小 Demo 使用纯 CSS 实现丰富的动画效果和页面互动, 适合初学者学习
        </li>
        <li>基于 React + daysiUI + TailwindCSS 构建</li>
      </ul>

      <ul>
        <li>
          <Icon icon="logos:ionic" />
          <strong>ZustCloud 校友录</strong>
          <span class="time">2023.09 至 2024.03</span>
        </li>
        <li>
          帮助校内信息交互的移动端应用, 在 Ionic(vue) + Tauri(react) 基础上面向 PC,
          H5, Android 平台持续发布
        </li>
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
          熟悉 CSS3, Scss 预处理器, 能够熟练使用 Tailwind CSS
          进行快速开发, 常用 css 动画
        </li>

        <li>
          <Icon icon="mingcute:diamond-square-line" />
          熟悉 Vue 及周边生态如 Nuxt, Vite, Pinia
        </li>

        <li>
          <Icon icon="mingcute:diamond-square-line" />
          了解并常用前端工程化和构建工具, 如 Vite, ESLint, Prettier,
          Webpack
        </li>

        <li>
          <Icon icon="mingcute:diamond-square-line" />
          接触过全栈场景, 了解 Node.js, Nuxt.js
        </li>

        <li>
          <Icon icon="mingcute:diamond-square-line" />
          熟悉敏捷开发的方式与流程, 了解 GitHub Actions, CI/CD, Nginx
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
