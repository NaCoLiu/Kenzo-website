import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import 'animate.css/animate.min.css'
import AOS from 'aos'

AOS.init({
      useClassNames: true,
      initClassName:'animate__animated',
      animatedClassName: 'animate__animated'
    })
const app = createApp(App);

app.mount('#app') 
