import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//import solid icons
import { fas } from "@fortawesome/free-solid-svg-icons";

//import regular icons
import { far } from "@fortawesome/free-regular-svg-icons";

//import brands icons
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
