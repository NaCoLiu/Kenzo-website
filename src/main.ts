import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { AnimateInViewDirective } from "@neeravp/vue-3-animate-in-view";
const app = createApp(App);
app.directive("animate-inview", AnimateInViewDirective);

app.mount('#app')
