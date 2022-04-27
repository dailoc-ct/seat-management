import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import VueKonva from "vue-konva";

createApp(App).use(router).use(createPinia()).use(VueKonva).mount("#app");
