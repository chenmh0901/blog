<script setup lang="ts">
import type { BookInfo } from '~/types/book';
import BookItem from './item.vue';

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
    <template v-for="book, index in timeSortedBooks" :key="index">
      <BookItem :book="book" />
    </template>
  </tbody>
</template>

<style scoped lang="scss"></style>
