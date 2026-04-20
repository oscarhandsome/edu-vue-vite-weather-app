import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

/** Icons */
import IconLocation from "@/assets/images/icon-location.svg";
import IconCloud from "@/components/Weather/IconCloud.vue";
import IconRain from "@/components/Weather/IconRain.vue";
import IconSun from "@/components/Weather/IconSun.vue";

const app = createApp(App);
app.component("IconLocation", IconLocation);
app.component("IconCloud", IconCloud);
app.component("IconRain", IconRain);
app.component("IconSun", IconSun);
app.directive("focus", {
  mounted: (el) => el.focus(),
});
app.mount("#app");
