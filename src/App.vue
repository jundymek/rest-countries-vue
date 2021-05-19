<template>
  <page-header />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGetCountry } from "@/composables/useGetCountry";
import PageHeader from "@/components/pageHeader/PageHeader.vue";

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
