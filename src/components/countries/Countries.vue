<template>
  <div class="wrapper">
    <country
      v-for="country in countries"
      :key="country.name"
      :country="country"
    />
  </div>
</template>

<script lang="ts">
import { useGetCountry } from "@/composables/useGetCountry";
import { defineComponent } from "vue";
import Country from "./Country.vue";

export default defineComponent({
  components: { Country },
  setup() {
    const { getAllCountries, countries } = useGetCountry();
    getAllCountries();
    return { countries };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: fit-content;
}
</style>
