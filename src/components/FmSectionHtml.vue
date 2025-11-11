<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { store } from '@/store.ts'
import type { Section } from '@/store.ts'

const props = defineProps<{
  section: Section
}>()

const htmlContent = ref<string>('')

onMounted(async () => {
  const response = await fetch(`${store.baseUrl}/${props.section.src}`)
  htmlContent.value = await response.text()
})
</script>

<template>
  <div v-if="section.filetype === 'html'" v-html="htmlContent" />
</template>
