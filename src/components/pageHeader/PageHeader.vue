<template>
  <div class="header-wrapper">
    <header class="header">
      <router-link to="/" class="title"
        ><h1>Where in the world?</h1></router-link
      >
      <button>Dark mode</button>
    </header>
  </div>
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
.header-wrapper {
  background: #fff;
  /* border-bottom: 12px solid $veryLightGray; */
  box-shadow: 0 0.5px 0.5px 1px rgb(231, 231, 231);
}
.header {
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  justify-content: space-between;
  align-items: center;
}

.title {
  text-decoration: none;
  color: #000;
  font-size: 14px;
}
</style>
