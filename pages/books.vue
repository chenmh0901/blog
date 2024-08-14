<script setup lang="ts">

</script>

<template>
  <div class="books">
    <div class="books-hero">
      <h1 class="mb-4">书单</h1>
      <div>一些阅读过的书籍记录</div>
      <div>包括文学、心理、技术等多个领域</div>
    </div>
    <div class="book-list">
      <Books />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.books {
  @apply w-full;

  .books-hero {
    @apply w-full p-6 rounded-xl bg-gray-200;
  }

  .book-list {
    @apply rounded-xl p-6 mt-[10px] w-full bg-gray-200;
  }
}
</style>
