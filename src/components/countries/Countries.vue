<template>
  <input
    type="text"
    name="searchInput"
    v-model="input"
    id="ipInput"
    placeholder="Search for a country..."
    class="input"
  />
  <div class="wrapper">
    <country
      v-for="country in filteredCountries"
      :key="country.name"
      :country="country"
    />
  </div>
</template>

<script lang="ts">
import { useGetCountry } from "@/composables/useGetCountry";
import { computed, defineComponent, ref } from "vue";
import Country from "./Country.vue";

export default defineComponent({
  components: { Country },
  setup() {
    const input = ref("");
    const { getAllCountries, countries } = useGetCountry();
    getAllCountries();
    const filteredCountries = computed(() =>
      countries.value?.filter((item) =>
        item.name.toLowerCase().includes(input.value.toLowerCase())
      )
    );

    return { input, filteredCountries };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 80px;
}

.input {
  width: 34%;
  margin: 20px 0;
  padding: 15px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 1px 0.1px $darkGray;
}
</style>
