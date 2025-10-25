<script setup lang="ts">
import { onMounted } from 'vue'
import { store } from './store.ts'
import MarkdownViewer from '@/components/MarkdownViewer.vue'

onMounted(() => {
  store.load()
})
</script>

<template>
  <main>
    <h1>GO</h1>

    <div v-if="store.sections">
      <div v-for="section in store.sections" :key="section.id">
        <div v-if="section.filetype === 'png'">
          <img :src="`${store.baseUrl}/${section.src}`" :alt="section.id" />
        </div>

        <div v-if="section.filetype === 'md'">
          <MarkdownViewer :src="`${store.baseUrl}/${section.src}`" />
        </div>
      </div>
    </div>

    <div v-else>Chargement...</div>
  </main>
</template>
