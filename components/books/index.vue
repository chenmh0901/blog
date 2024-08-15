<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { BookInfo } from '~/types/book';
import { getBooksListCSV } from '~/composables/books';
import BookList from './list.vue'
import BookGroup from './group.vue'

enum SortRule {
  Type = 'Type',
  Time = 'Time'
}

const { val, to } = useToggle([SortRule.Time, SortRule.Type]);

const books = ref<BookInfo[]>([]);
const fetchBooks = async () => {
  try {
    books.value = await getBooksListCSV();
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};

onMounted(fetchBooks)
</script>
<template>
  <div class="flex items-center gap-4 mb-4">
    <button class="btn rounded-lg flex items-center" @click="to(SortRule.Type)">
      <span class="flex items-center gap-2">
        <Icon height="20" width="20" icon="mingcute:tag-line" />
        <span>根据标签排序</span>
      </span>
    </button>

    <button class="btn rounded-lg" @click="to(SortRule.Time)">
      <span class="flex items-center gap-2">
        <Icon height="20" width="20" icon="mingcute:time-line" />
        <span>根据时间排序</span>
      </span>
    </button>
    <ThemeToggle />
  </div>
  <div class="overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th class="table-header">书名</th>
          <th class="table-header">作者</th>
          <th class="table-header">类型</th>
          <th class="table-header">日期</th>
        </tr>
      </thead>
      <BookList v-if="val === SortRule.Time" :books="books" />
      <BookGroup v-else :books="books" />
    </table>
  </div>
</template>

<style scoped lang="scss">
.table {
  th {
    @apply text-lg font-bold text-gray-800;
  }
}

[data-theme="dark"] .table-header {
  @apply dark:text-gray-300;
}
</style>
