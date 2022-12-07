import { createApp, defineComponent, h } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { ElIcon } from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { camelCaseToKebabaCase } from './utils'

import './styles/reset.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  const componentName = 'e' + camelCaseToKebabaCase(key)
  app.component(componentName, defineComponent({
    render() {
      return h(ElIcon, () => h(component))
    }
  }))
}

app.use(createPinia())
app.use(router)

app.mount('#app')
