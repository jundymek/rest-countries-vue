<template>
  <page-header />
  <div class="outer-wrapper">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageHeader from "@/components/pageHeader/PageHeader.vue";
import { useGetCountry } from "./composables/useGetCountry";

export default defineComponent({
  name: "App",
  components: { PageHeader },
  setup() {
    const { getAllCountries } = useGetCountry();
    getAllCountries();
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
:root {
  /* Variables for default theme (light-mode) */
  --background-color: hsl(0, 0%, 98%);
  --header-background: hsl(0, 0%, 98%);
  --box-color: #fff;
  --text-color: hsl(200, 15%, 8%);
  --box-shadow: rgb(231, 231, 231);
}

[data-theme="dark"] {
  --box-shadow: rgb(65, 65, 65);
  --header-background: #3b4755;
  --background-color: hsl(207, 26%, 17%);
  --text-color: hsl(0, 0%, 100%);
  --box-color: hsl(209, 23%, 22%);
}

#app {
  font-family: "Nunito Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}

body {
  background: var(--background-color);
  margin: 0;
  padding: 0;
}

.outer-wrapper {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
