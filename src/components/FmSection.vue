<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { store } from '@/store.ts'
import type { Section } from '@/store.ts'
import FmSectionHtml from '@/components/FmSectionHtml.vue'
import FmSectionImg from '@/components/FmSectionImg.vue'

const props = defineProps<{
  slug: string
}>()

const section = ref<Section | null>(null)
const ready = ref<boolean>(false)

onMounted(async () => {
  section.value = store.sections.find((s) => s.id === props.slug) || null

  console.log('---------------------------------')
  console.log(section.value)
  console.log(section.value.error)

  if (!section.value) {
    console.error(`Pas de section pour ${props.slug}`)
    return
  }

  if (section.value.error) {
    console.error(`Error : ${section.value.error}`)
    return
  }
  ready.value = true
})
</script>

<template>
  <div v-if="section && ready">
    <h2 class="section-title">{{ section.title }}</h2>

    <fm-section-html v-if="section.filetype === 'html'" :section="section" />
    <fm-section-img v-if="section.filetype === 'png'" :section="section" />
  </div>
</template>
