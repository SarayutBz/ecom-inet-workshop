// import './assets/main.css'
import '@/styles/goble.scss'

import { registerPlugins } from "./plugins";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
registerPlugins(app);

app.mount("#app");
