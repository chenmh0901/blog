<script setup lang="ts"></script>

<template>
  <div class="home">
    <HeroCard :title="'Amumu\'s blog'" :desc="['Hello 这里是 amumu 的博客', '我来自 cn, 从大学开始接触 code, 前端开发实习生, 目前大三在读']" />

    <TechStack />

    <ProjectList />
  </div>
</template>

<style lang="scss" scoped>
.home {
  @apply w-full h-full flex flex-col gap-4;
}
</style>
