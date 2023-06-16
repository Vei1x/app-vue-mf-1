import { h, createApp } from "vue";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecycle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        //name: "vue app",
        // mountParcel: this.mountParcel,
        // singleSpa: this.singleSpa,
      });
    },
    errorHandler(err) {
      console.error("An error occurred: ", err.message);
      return false;
    },
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
