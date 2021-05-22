<template>
  <div class="outer-wrapper">
    <page-header />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: $veryLightGray;
}

.outer-wrapper {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
