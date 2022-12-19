import Quill, { QuillOptionsStatic } from "quill"

const Size = Quill.import('attributors/style/size');
Size.whitelist = ['8px', '9px', '10px', '12px', '14px', '16px', '20px', '24px', '32px', '42px', '54px', '68px', '84px', '98px']
Quill.register(Size, true)

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
        [{ 'align': [] }],
        ['image', 'formula'],
        ['clean']
      ],
    }
  },
  theme: 'snow',
  formats: ['bold', 'underline', 'header', 'italic', 'link', 'image', 'list', 'font', 'size', 'code-block', 'blockquote', 'indent', 'script', 'color', 'strike', 'background', 'align'],
  placeholder: 'Type something in here!',
}