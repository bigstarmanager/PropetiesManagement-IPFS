import { createApp, h } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import Vuelidate from 'vuelidate'
import './styles/index.css'

require('dotenv').config()


const app = createApp({
  render: () => h(App)
})

app.config.productionTip = false

app.use(router)
app.use(store)
app.use(Vuelidate)

app.mount('#app')
