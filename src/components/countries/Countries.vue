<template>
  <div class="filter-wrapper">
    <input
      type="text"
      name="searchInput"
      v-model="input"
      id="ipInput"
      placeholder="Search for a country..."
      class="input"
    />
    <Multiselect
      v-model="selectedRegion"
      :options="regions"
      class="dupa"
      placeholder="Filter by region"
    />
  </div>
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
import { computed, defineComponent, ref, watch } from "vue";
import Country from "./Country.vue";
import Multiselect from "@vueform/multiselect";

export default defineComponent({
  components: { Country, Multiselect },
  setup() {
    const input = ref("");
    const selectedRegion = ref<string | null>(null);
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
    const { getAllCountries, getCountriesByRegion, countries, countryCodes } =
      useGetCountry();
    getAllCountries();
    console.log(countryCodes);
    const filteredCountries = computed(() =>
      countries.value?.filter((item) =>
        item.name.toLowerCase().includes(input.value.toLowerCase())
      )
    );

    watch(selectedRegion, () => {
      if (selectedRegion.value) {
        return getCountriesByRegion(selectedRegion.value);
      }
      return getAllCountries();
    });

    return { input, filteredCountries, selectedRegion, regions };
  },
});
</script>

<style lang="scss">
@import url("~@vueform/multiselect/themes/default.css");
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

.filter-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dupa {
  width: 160px;
  margin-right: 0;
}

.multiselect-options {
  margin-top: 4px;
  font-size: 10px;
  overflow: unset;
  border-radius: 4px;
}

.multiselect-input {
  font-size: 10px;
  background: #fff;
  border: none;
}
.multiselect-option {
  padding: 5px 12px;
  min-height: unset;
}
</style>
