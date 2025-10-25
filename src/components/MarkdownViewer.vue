<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { marked } from 'marked'

const props = defineProps<{
  src: string
}>()

const html = ref('Chargement...')

onMounted(async () => {
  try {
    console.log(props.src)
    const res = await fetch(props.src)
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    const text = await res.text()
    html.value = marked.parse(text)
  } catch (err) {
    html.value = `<p style="color:red;">Erreur de chargement : ${err}</p>`
  }
})
</script>

<template>
  <div class="prose max-w-none" v-html="html"></div>
</template>
