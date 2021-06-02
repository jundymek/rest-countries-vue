<template>
  <div class="header-wrapper">
    <header class="header">
      <router-link to="/" class="title"
        ><h1>Where in the world?</h1></router-link
      >
      <button @click="toggleTheme">
        {{ theme == "light" ? "Jasne" : "Ciemne" }}
      </button>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTheme } from "@/composables/useTheme";

export default defineComponent({
  setup() {
    const { theme, toggleTheme } = useTheme();
    console.log(theme.value);
    return { toggleTheme, theme };
  },
});
</script>

<style lang="scss" scoped>
.header-wrapper {
  background: var(--header-background);
  /* border-bottom: 12px solid $veryLightGray; */
  box-shadow: 0 0.5px 0.5px 1px var(--box-shadow);
}
.header {
  display: flex;
  /* width: 100%; */
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 80px;
}

.title {
  text-decoration: none;
  color: var(--text-color);
  font-size: 14px;
}
</style>
