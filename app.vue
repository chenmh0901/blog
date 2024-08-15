<script setup lang="ts">
import { useThemeStore } from '~/store/theme'
const themeStore = useThemeStore()

onMounted(() => {
  themeStore.getBrowserTheme()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
