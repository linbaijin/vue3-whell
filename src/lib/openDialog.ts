import Dialog from './Dialog.vue'
import { createApp, h } from 'vue'
interface DialogOptions {
  title?: string
  content?: string
  closeOnClickOverlay?: boolean
  ok?: Function
  cancel?: Function
}

export const openDialog = (options: DialogOptions) => {
  const { title, content, closeOnClickOverlay, ok, cancel } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = () => {
    app.unmount()
    div.remove()
  }
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          'onUpdate:visible'(newVisible: Boolean) {
            if (!newVisible) {
              close()
            }
          },
          closeOnClickOverlay,
          ok,
          cancel,
        },
        { title: () => title, content: () => content }
      )
    },
  })
  app.mount(div)
}
