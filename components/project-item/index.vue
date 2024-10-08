<script setup lang="ts">
const props = defineProps<{
  title: string;
  img: string;
}>();

</script>
<template>
  <div class="card-hero">
    <img class="card-hero__bkg" :src="props.img" alt="Loading">
    <div class="card-hero__backdrop" />
    <div class="card-hero__body">
      <h3>
        {{ props.title }}
      </h3>
      <div class="_content">
        <slot name="content" />
      </div>
      <footer>
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<style scoped>
.card-hero {
  @apply hero shadow rounded-xl max-w-full w-full h-full cursor-help overflow-hidden;
  transition: all 0.3s ease;
}

/* common */
.card-hero__common {
  @apply relative rounded-xl w-full h-full flex flex-col items-center text-white;
}

.card-hero__body {
  @apply card-hero__common;
}

/* image & background */
.card-hero__bkg {
  @apply object-cover !h-[200px] card-hero__body;
}

.card-hero__backdrop {
  @apply card-hero__common backdrop-blur-sm;
  background-color: rgba(0, 0, 0, 0.22);
  transition: all 0.3s ease;
}

.card-hero:hover .card-hero__backdrop {
  @apply backdrop-blur-0;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(45deg,
      rgba(0, 0, 0, 0.1) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.1) 0),
    linear-gradient(45deg,
      rgba(0, 0, 0, 0.1) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.1) 0);
  background-position:
    0 0,
    6px 6px;
  background-size: 12px 12px;
}

h3 {
  @apply text-2xl font-bold mt-[30px];
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
}

._content {
  @apply flex flex-col gap-2 items-center text-xs text-gray-100 mt-[10px];
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}

footer {
  @apply absolute bottom-[0] text-gray-300 flex w-full px-8 items-end justify-end gap-4;
}

[data-theme='dark'] footer {
  @apply dark:text-black;
}
</style>
