<script setup lang="ts">
import { Icon } from '@iconify/vue';

const props = defineProps<{
  title: string;
  desc: string[];
}>();
</script>
<template>
  <div class="hero-card">
    <h1 class="mb-4 flex items-center gap-1">
      <Icon icon="material-symbols:book-2-rounded" />
      {{ props.title }}
    </h1>
    <div v-for="item, index in props.desc" :key="index" class="mb-1">
      {{ item }}
    </div>
    <div class="flex items-center gap-1">
      <span>简历入口</span>
      <a href="/resume">
        <Icon icon="mingcute:open-door-line"
          class="text-[28px] flex items-center hover:text-purple-400 transition-all duration-300" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero-card {
  @apply w-full p-6 rounded-xl;
  background: linear-gradient(90deg, #ededed81 0%, #edfbff99 100%)
}

[data-theme="dark"] .hero-card {
  @apply dark:bg-none;
}
</style>
