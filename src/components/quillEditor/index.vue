<template>
  <div ref="editorRef" id="editor"></div>

  <button class="ql-imageHandler" @click="handleClick">Salvar</button>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref } from 'vue'
import { quillConfig } from './editorConfig/quillConfig'
import Quill from 'quill'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

export default defineComponent({
  name: 'QuillEditor',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  setup({ modelValue }, { emit }) {
    const editorRef = ref<Element | Quill>()

    const initEditor = () => {
      editorRef.value = new Quill(editorRef.value as Element, quillConfig)

      if (modelValue) {
        console.log('model')

        const editor = editorRef.value as Quill
        editor.root.innerHTML = modelValue
      }
    }

    const handleClick = () => {
      console.log(editorRef.value)

      const editor = editorRef.value as Quill
      console.log('click', editor)

      if (editor.root && editor.root.innerHTML) emit('update:modelValue', editor.root.innerHTML)
      // const t = document.getElementById('editor')
      // console.log('t', t?.innerHTML)

      // else emit('update:modelValue', document.getElementById('editor'))
    }

    onMounted(initEditor)
    onUpdated(() => {
      const editor = editorRef.value as Quill
      console.log(editor)

      // if (!editor.root) editorRef.value = new Quill(editorRef.value as Element, quillConfig)
      console.log('update')
    })

    return {
      editorRef,
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