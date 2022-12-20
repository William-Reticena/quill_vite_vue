<template>
  <quill-editor :content="editorContent" @save="handleEditorClick" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { teste } from './assets/teste'
import QuillEditor from './components/quillEditor/index.vue'

export default defineComponent({
  name: 'App',
  components: { QuillEditor },
  setup() {
    const editorContent = ref('')

    const handleEditorClick = (editorValue: string): void => {
      editorContent.value = editorValue
      console.log(editorContent.value)
    }

    return { editorContent, handleEditorClick }
  },
})
</script>
