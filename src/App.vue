<script setup lang="ts">
import { onMounted } from 'vue'
import { store } from './store.ts'
import FmSection from '@/components/FmSection.vue'

onMounted(() => {
  store.load()
})
</script>

<template>
  <main>
    <div v-if="store.ready">

      <fm-section slug="header"/>

      <fm-section slug="about"/>

      <fm-section slug="contact"/>


      <pre>{{store}}</pre>

    </div>

    <div v-else>Chargement...</div>
  </main>
</template>
