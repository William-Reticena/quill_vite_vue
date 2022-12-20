<template>
  <quill-editor :value="editorContent" @save="handleEditorClick" />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { teste } from './assets/teste'
import QuillEditor from './components/quillEditor/index.vue'

export default defineComponent({
  name: 'App',
  components: { QuillEditor },
  setup() {
    const editorContent = ref(teste)

    const handleEditorClick = (editorValue: string) => {
      editorContent.value = editorValue
    }

    return { editorContent, handleEditorClick }
  },
})
</script>


