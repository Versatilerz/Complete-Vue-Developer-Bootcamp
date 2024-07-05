import "./assets/main.css";

import { createApp } from "vue";
import App1 from "./App1.vue";
import App2 from "./App2.vue";

createApp(App1).mount("#app1");
createApp(App2).mount("#app2");
