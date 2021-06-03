<template>
  <div class="header-wrapper">
    <header class="header">
      <router-link to="/" class="title"
        ><h1>Where in the world?</h1></router-link
      >
      <button @click="toggleTheme" class="toggle-button">
        <img
          :src="require(`@/assets/${iconUrl}`)"
          alt=""
          width="14"
          height="14"
          :class="iconStyle"
        />
        <span :class="spanStyle">{{
          theme == "light" ? "Light mode" : "Dark Mode"
        }}</span>
      </button>
    </header>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useTheme } from "@/composables/useTheme";

export default defineComponent({
  setup() {
    const { theme, toggleTheme } = useTheme();
    const iconUrl = computed(() =>
      theme.value == "dark" ? "moon-outline.svg" : "sunny-outline.svg"
    );
    const iconStyle = computed(() => theme.value == "dark" && "toggle-icon");
    const spanStyle = computed(() => theme.value == "dark" && "dark");
    return { toggleTheme, theme, iconStyle, spanStyle, iconUrl };
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

.toggle-icon {
  filter: invert(100%) sepia(0%) saturate(7443%) hue-rotate(198deg)
    brightness(126%) contrast(112%);
}

.toggle-button {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: #fff;
  /* width: 70px; */
  justify-content: space-between;
  cursor: pointer;

  span {
    color: $veryDarkBlue;
    padding-left: 10px;
  }
  .dark {
    color: white !important;
  }
}
</style>
