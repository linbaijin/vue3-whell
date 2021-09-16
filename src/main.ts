import './lib/lsui.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue'


const app = createApp(App)
app.component('Markdown', Markdown)
app.use(router)
app.mount('#app')
