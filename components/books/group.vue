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

const typeGroupedBooks = computed(() => {
  return [...props.books].reduce((acc, cur) => {
    const tag = cur.tag;
    if (!acc[tag]) {
      acc[tag] = [];
    }
    acc[tag].push(cur);
    return acc;
  }, {} as Record<string, BookInfo[]>);
});

const typeKeys = computed(() => Object.keys(typeGroupedBooks.value))
</script>
<template>
  <tbody>
    <template v-for="type, index in typeKeys" :key="index">
      <tr v-for="book, index in typeGroupedBooks[type]" :key="index">
        <td>{{ book.name }}</td>
        <td>{{ book.author }}</td>
        <td><span class="badge" :class="BadgeColor[book.tag as keyof typeof BadgeColor]">{{ book.tag
            }}</span></td>
        <td>{{ book.date }}</td>
      </tr>
    </template>
  </tbody>
</template>

<style scoped lang="scss"></style>
