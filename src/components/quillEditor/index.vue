<template>
  <div ref="quillRef" id="editor"></div>

  <button class="ql-imageHandler" @click="handleClick">Salvar</button>
  <button class="ql-imageHandler" @click="handleEdit">Editar</button>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, onUpdated, ref } from 'vue'
import Quill from 'quill'
import 'katex/dist/katex.min.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import { quillConfig } from './editorConfig'

export default defineComponent({
  name: 'QuillEditor',
  emits: ['save'],
  props: {
    content: { type: String, required: true },
  },
  setup({ content }, { emit }) {
    const quillRef = ref<Element | Quill>()

    const initEditor = (): void => {
      quillRef.value = new Quill(quillRef.value as Element, quillConfig)
      const editor = quillRef.value as Quill
      const storage = sessionStorage.getItem('editorContent')
      editor.disable()
      console.log(quillRef.value)

      if (content) editor.root.innerHTML = content

      if (!content && storage) editor.root.innerHTML = storage
    }

    const handleClick = (): void => {
      const editor = quillRef.value as Quill
      console.log(editor)

      editor.disable()
      sessionStorage.setItem('editorContent', editor.root.innerHTML)
      // emit('save', editor.root.innerHTML)
    }

    const handleEdit = () => {
      const editor = quillRef.value as Quill
      editor.enable()
      editor.focus()
    }

    onMounted(initEditor)

    return {
      quillRef,
      handleClick,
      handleEdit,
    }
  },
})
</script>

<style>
#editor {
  min-height: 300px;
}

.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: attr(data-value) !important;
}
</style>
