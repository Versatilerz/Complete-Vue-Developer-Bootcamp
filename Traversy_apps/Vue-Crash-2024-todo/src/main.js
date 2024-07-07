import "./assets/main.css";
import "primeicons/primeicons.css";
import router from "./router";

import { createApp } from "vue";
// import App1 from "./App1.vue";
// import App2 from "./App2.vue";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
// createApp(App1).mount("#app1");
// createApp(App2).mount("#app2");
