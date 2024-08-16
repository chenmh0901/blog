<script setup lang="ts">
import type { BookInfo } from '~/types/book';
import BookItem from './item.vue';

const props = defineProps<{
  books: BookInfo[]
}>();

const typeGroupedBooks = computed(() => {
  return [...props.books].reduce((acc, cur) => {
    const type = cur.type;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(cur);
    return acc;
  }, {} as Record<string, BookInfo[]>);
});

const typeKeys = computed(() => Object.keys(typeGroupedBooks.value))
</script>
<template>
  <tbody>
    <template v-for="type, index in typeKeys" :key="index">
      <template v-for="book, index in typeGroupedBooks[type]" :key="index">
        <BookItem :book="book" />
      </template>
    </template>
  </tbody>
</template>

<style scoped lang="scss"></style>
