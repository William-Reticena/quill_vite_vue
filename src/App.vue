<template>
  <quill-editor v-model="editor" />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { teste } from './assets/teste'
import QuillEditor from './components/quillEditor/index.vue'

export default defineComponent({
  name: 'App',
  components: { QuillEditor },
  setup() {
    const editor = ref('')

    watch(editor, () => console.log('aqui', editor.value))

    return { editor }
  },
})
</script>


