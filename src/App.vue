<template>
  <div class="outer-wrapper">
    <page-header />
    <countries />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGetCountry } from "@/composables/useGetCountry";
import PageHeader from "@/components/pageHeader/PageHeader.vue";
import Countries from "@/components/countries/Countries.vue";

export default defineComponent({
  name: "App",
  components: { PageHeader, Countries },
  setup() {
    const { getAllCountries } = useGetCountry();
    getAllCountries();
  },
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
