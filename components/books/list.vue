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

const props = defineProps<{
  books: BookInfo[]
}>();

const timeSortedBooks = computed(() => {
  return [...props.books].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
});
</script>
<template>
  <tbody>
    <tr v-for="book, index in timeSortedBooks" :key="index">
      <td>{{ book.name }}</td>
      <td>{{ book.author }}</td>
      <td><span class="badge text-white" :class="BadgeColor[book.tag as keyof typeof BadgeColor]">{{ book.tag
          }}</span></td>
      <td>{{ book.date }}</td>
    </tr>
  </tbody>
</template>

<style scoped lang="scss"></style>
