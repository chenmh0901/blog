<script setup lang="ts">
import type { BookInfo } from '~/types/book';

enum BadgeColor {
  文学 = 'bg-indigo-900',
  心理 = 'bg-violet-900',
  科技 = 'bg-purple-900',
  法律 = 'bg-fuchsia-900',
  管理 = 'bg-pink-900',
  历史 = 'bg-rose-900',
  金融 = 'bg-amber-900',
}

defineProps<{
  book: BookInfo
}>();
</script>
<template>
  <tr>
    <td>{{ book.name }}</td>
    <td>{{ book.author }}</td>
    <td><span class="badge text-white" :class="BadgeColor[book.type as keyof typeof BadgeColor]">{{
      book.type
    }}</span></td>
    <td>{{ formatDate(book.date) }}</td>
  </tr>
</template>

<style scoped lang="scss">
@media screen and (max-width: 768px) {
  .badge {
    @apply p-0 bg-transparent;
  }
}
</style>
