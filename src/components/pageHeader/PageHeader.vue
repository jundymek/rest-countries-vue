<template>
  <header class="header">
    <router-link to="/" class="title"><h1>Where in the world?</h1></router-link>
    <button>Dark mode</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    console.log("setup");
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}

.title {
  text-decoration: none;
}
</style>
