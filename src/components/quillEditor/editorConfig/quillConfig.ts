import Quill, { QuillOptionsStatic } from "quill"
import katex from "katex"

declare global {
  interface Window {
    katex: any
  }
}

window.katex = katex

const Size = Quill.import('attributors/style/size');
Size.whitelist = ['8pt', '9pt', '10pt', '12pt', '14pt', '16pt', '20pt', '24pt', '32pt', '42pt', '54pt', '68pt', '84pt', '98pt']
Quill.register(Size, true)

// const Font = Quill.import("formats/font");
// Font.whitelist = [
//   "arial",
//   "comic-sans",
//   "courier-new",
//   "georgia",
//   "helvetica",
//   "lucida"
// ];
// Quill.register(Font, true)



export const quillConfig: QuillOptionsStatic = {
  modules: {
    toolbar: {
      container: [
        [{ 'font': [] }, { 'size': Size.whitelist }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'super' }, { 'script': 'sub' }],
        [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'align': '' }, { 'align': 'center' }, { 'align': 'right' }, { 'align': 'justify' },],
        ['image', 'formula'],
        ['clean']
      ],
    }
  },
  theme: 'snow',
  formats: ['bold', 'underline', 'header', 'italic', 'link', 'image', 'list', 'font', 'size', 'code-block', 'blockquote', 'formula', 'indent', 'script', 'color', 'strike', 'background', 'align'],
  placeholder: '',
}
