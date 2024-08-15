<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useThemeStore } from '~/store/theme'

const themeStore = useThemeStore()

const props = defineProps<{
  size?: string
}>()
</script>
<template>
  <Icon v-if="themeStore.curTheme === 'dark'" icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
    class="theme-icon" :height="props.size ?? '24px'" @click="themeStore.toggleTheme" />
  <Icon v-else icon="line-md:moon-filled-loop" class="theme-icon" :height="props.size ?? '24px'"
    @click="themeStore.toggleTheme" />
</template>

<style scoped lang="scss">
.theme-icon {
  @apply cursor-pointer hover:scale-110 transition-all duration-300;
  @apply hover:text-gray-700 dark:hover:text-gray-300
}
</style>
