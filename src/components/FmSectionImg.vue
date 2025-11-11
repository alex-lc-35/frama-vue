<script setup lang="ts">
import { store } from '@/store.ts'
import type { Section } from '@/store.ts'

const props = defineProps<{
  section: Section
}>()

</script>

<template>
  <img :src="`${store.baseUrl}/${props.section.src}`" :alt="props.section.id" />
</template>
