// src/store/data.ts
import { reactive } from 'vue'

interface Section {
  id: string
  title: string
  active: boolean
  type: string
  filetype: string
  src: string
  src_md: string
  src_sm: string
  load: boolean
  error: string | null
}

interface Store {
  baseUrl: string
  sections: Section[]
  load: () => Promise<void>
  ready: boolean
}

export const store = reactive<Store>({
  baseUrl: 'https://alex-lc-35.github.io/cdn-content',
  sections: [], // ✅ initialise ton tableau
  ready: false,

  async load() {
    try {
      const res = await fetch(`${this.baseUrl}/data_updated.json`)
      if (!res.ok) throw new Error(`Erreur ${res.status}`)

      this.sections = (await res.json()) as Section[]
      console.log('Données chargées :', this.sections)
      this.ready = true
    } catch (err) {
      console.error('Erreur de chargement :', err)
    }
  },
})
