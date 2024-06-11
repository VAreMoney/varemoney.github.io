import { createApp } from 'vue'
import type { Plugin } from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import './assets/scss/style.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faCopy as faCopySolid } from '@fortawesome/free-solid-svg-icons'

library.add(faXTwitter, faTelegram, faCopySolid)

const app = createApp(App)

app.use(router)
app.use(Buefy as unknown as Plugin, {
  defaultIconPack: 'fa',
  defaultIconComponent: 'font-awesome-icon'
})
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
