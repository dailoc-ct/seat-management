import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import VueKonva from "vue-konva";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(PrimeVue);
app.use(VueKonva);
app.component("my-button", Button);
app.component("prim-input", InputText);
app.mount("#app");
