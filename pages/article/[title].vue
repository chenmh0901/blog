<script setup lang="ts">
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'
import { GetArticleContent } from '~/composables/article';

const route = useRoute()

const { title } = route.params
const { time } = route.query;
const tag = route.query.tag as string || '';

const fileName = computed(() => {
  return [title, tag, time].filter(Boolean).join('@')
})

const mdContent = ref('');
// fetch article and marked it
const fetch = async () => {
  const data = await GetArticleContent(fileName.value);
  mdContent.value = new MarkdownIt().render(data)
};

onMounted(fetch)
</script>

<template>
  <div class="article-viewer">
    <header>
      <h1>{{ title }}</h1>
      <p v-if="tag && time" class="info">
        <BadgeIcon :name="tag" size="24" class="inline-flex" />
        <span class="text-grey-300 mx-4">|</span>
        {{ time }}
      </p>
    </header>

    <div class="divider" />

    <div class="prose" v-html="mdContent" />
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
</style>
