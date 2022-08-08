import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBuilding as fasBuilding, faSackDollar as fasSackDollar } from '@fortawesome/free-solid-svg-icons'

library.add(fasBuilding, fasSackDollar)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
