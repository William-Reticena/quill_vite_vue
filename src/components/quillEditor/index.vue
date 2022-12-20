<template>
  <div ref="quillRef" id="editor"></div>

  <button class="ql-imageHandler" @click="handleClick">Salvar</button>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { quillConfig } from './editorConfig/quillConfig'
import Quill from 'quill'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

export default defineComponent({
  name: 'QuillEditor',
  emits: ['save'],
  props: {
    value: { type: String, required: true },
  },
  setup({ value }, { emit }) {
    const quillRef = ref<Element | Quill>()

    const initEditor = () => {
      quillRef.value = new Quill(quillRef.value as Element, quillConfig)

      if (value) {
        const editor = quillRef.value as Quill
        editor.root.innerHTML = value
      }
    }

    const handleClick = () => {
      const editor = quillRef.value as Quill

      emit('save', editor.root.innerHTML)
    }

    onMounted(initEditor)

    return {
      editorRef: quillRef,
      handleClick,
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