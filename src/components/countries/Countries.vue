<template>
  <div class="filter-wrapper">
    <label>
      <input
        type="text"
        name="searchInput"
        v-model="input"
        id="ipInput"
        placeholder="Search for a country..."
        class="input"
      />
    </label>
    <Multiselect
      v-model="selectedRegion"
      :options="regions"
      class="select"
      placeholder="Filter by region"
    />
  </div>
  <div class="wrapper" v-if="filteredCountries && filteredCountries.length">
    <country
      v-for="country in filteredCountries"
      :key="country.name"
      :country="country"
    />
  </div>
  <div v-else>No data</div>
</template>

<script lang="ts">
import { useGetCountry } from "@/composables/useGetCountry";
import { defineComponent, onMounted, ref, watch } from "vue";
import Country from "./Country.vue";
import Multiselect from "@vueform/multiselect";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { Country, Multiselect },
  setup() {
    const input = ref("");
    const selectedRegion = ref<string | null>(null);
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
    const {
      getAllCountries,
      getCountriesByRegion,
      getCountriesByInputValue,
      filteredCountries,
    } = useGetCountry();

    const router = useRouter();

    watch(selectedRegion, () => {
      if (selectedRegion.value) {
        return getCountriesByRegion(selectedRegion.value);
      }
      return getAllCountries();
    });

    watch(input, () => {
      getCountriesByInputValue(input.value);
    });

    onMounted(() => {
      if (localStorage.getItem("selectedRegion")) {
        selectedRegion.value = localStorage.getItem("selectedRegion");
      }
    });

    router.beforeEach((to, from, next) => {
      if (selectedRegion.value) {
        localStorage.setItem("selectedRegion", selectedRegion.value);
      } else {
        localStorage.removeItem("selectedRegion");
      }
      next();
    });

    return { input, filteredCountries, selectedRegion, regions };
  },
});
</script>

<style lang="scss">
@import url("~@vueform/multiselect/themes/default.css");
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
  grid-column-gap: 66px;
  grid-row-gap: 80px;
  padding: 20px 80px 60px 80px;
  @media (max-width: $desktop) {
    grid-row-gap: 40px;
    padding: 0;
  }
}

.input {
  width: 400px;
  margin: 20px 0;
  padding: 15px 50px;
  border: none;
  border-radius: 4px;
  background-color: var(--input-box);
  box-shadow: 0 0 1px 0.1px $darkGray;
  &::placeholder {
    color: var(--input-placeholder);
    font-size: 10px;
  }
  @media (max-width: $desktop) {
    box-sizing: border-box;
    width: 100%;
  }
}
label {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 16px;
    background-position: center;
    background-repeat: no-repeat;
    filter: var(--input-icon-invert);
    background-image: url("~@/assets/search-outline.svg");
  }
}

.filter-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  @media (max-width: $desktop) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 0 40px 0;
    width: 90%;
    margin: 0 auto;
  }
}

.select {
  width: 160px;
  margin-right: 0;
  @media (max-width: $desktop) {
    margin-left: 0;
  }
}

.multiselect-options {
  margin-top: 4px;
  font-size: 10px;
  overflow: unset;
  border-radius: 4px;
  border-color: var(--multiselect-box);
}

.multiselect-input {
  font-size: 10px;
  background: var(--multiselect-box);
  border: none;
}
.multiselect-option {
  padding: 5px 12px;
  background: var(--multiselect-box);
  min-height: unset;
  color: var(--text-color);
  &.is-pointed {
    background-color: var(--multiselect-box);
  }
  &:hover {
    background: var(--multiselect-box);
  }
}

.multiselect-placeholder {
  color: var(--text-color);
}
.multiselect-label {
  color: var(--text-color);
}

.multiselect-clear {
  background-color: var(--multiselect-box);
}
</style>
