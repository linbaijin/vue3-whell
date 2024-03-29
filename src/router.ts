import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DatePickerDemo from './components/DatePickerDemo.vue'
import DocDemo from './components/DocDemo.vue'
import { h } from 'vue'
import Markdown from './components/Markdown.vue'
import Intro from './markdown/Intro.md'
import Install from './markdown/Install.md'
import GetStarted from './markdown/GetStarted.md'
import Test from './views/test.vue'
const renderMarkdown = (content, key) => {
  return h(Markdown, { content, key })
}
const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {
          path: '',
          component: DocDemo,
        },
        {
          path: 'intro',
          component: renderMarkdown(Intro, 'Intro'),
        },
        {
          path: 'install',
          component: renderMarkdown(Install, 'Install'),
        },
        {
          path: 'get-started',
          component: renderMarkdown(GetStarted, 'GetStarted'),
        },
        {
          path: 'switch',
          component: SwitchDemo,
        },
        {
          path: 'button',
          component: ButtonDemo,
        },
        {
          path: 'dialog',
          component: DialogDemo,
        },
        {
          path: 'tabs',
          component: TabsDemo,
        },
        {
          path: 'datepicker',
          component: DatePickerDemo,
        },
      ],
    },
  ],
})

export default router
