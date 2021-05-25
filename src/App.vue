<template>
  <page-header />
  <div class="outer-wrapper">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageHeader from "@/components/pageHeader/PageHeader.vue";

export default defineComponent({
  name: "App",
  components: { PageHeader },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
#app {
  font-family: "Nunito Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $veryDarkBlueLight;
}

body {
  background: $veryLightGray;
  margin: 0;
  padding: 0;
}

.outer-wrapper {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
