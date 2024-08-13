<script setup lang="ts">
import { useRoute } from 'vue-router'
import { marked } from 'marked';
import { GetArticleContent } from '~/composables/article';

const route = useRoute()

const { title } = route.params
const { tag, time } = route.query

const fileName = computed(() => {
  return [title, time, tag].filter(Boolean).join('@')
})

const render = new marked.Renderer();

marked.setOptions({
  renderer: render,
  gfm: true,
  pedantic: false,
});

const content = ref();
// fetch article and marked it
const fetch = async () => {
  const data = await GetArticleContent(fileName.value);
  content.value = marked(data)
};

onMounted(fetch)
</script>

<template>
  <div class="article-viewer">
    <header>
      <h1>{{ title }}</h1>
      <p v-if="tag && time" class="info">{{ tag }}|{{ time }}</p>
    </header>

    <div class="divider" />

    <div v-html="content" />
  </div>
</template>

<style scoped lang="scss">
.article-viewer {
  @apply w-full pb-48;

  header {
    @apply pb-5 pt-2;
    @apply flex flex-col gap-6;
  }

  h1 {
    @apply text-4xl font-semibold self-center;
  }

  .info {
    @apply text-gray-500 text-xs;
    @apply self-center;
  }
}

.article {
  @apply w-full card shadow-xl rounded-xl;
}

.card-body {
  @apply shadow-sm rounded-xl;
  background-color: rgba(255, 255, 255, 0.6);
}
</style>
