<script setup lang="ts">
</script>

<template>
  <div class="w-full">
    <div class="articles-hero">
      <h1 class="mb-4">笔记列表</h1>
      <div>一些学习 / 日常记录</div>
      <div>包括面试题和面试总结</div>
    </div>
    <div class="articles">
      <Articles />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.articles-hero {
  @apply w-full p-6 rounded-xl;
  background: linear-gradient(90deg, #e2c7b4 0%, #e3ffde 100%);
}

.articles {
  @apply flex flex-col items-start w-full mt-[10px];
}

[data-theme="dark"] .articles-hero {
  @apply dark:bg-none;
}
</style>
