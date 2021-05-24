<template>
  <country-details :countryName="countryName" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import CountryDetails from "../components/countryDetails/CountryDetails.vue";

export default defineComponent({
  components: { CountryDetails },
  setup() {
    const route = useRoute();
    // const { getCountryByName, country } = useGetCountry();
    // getCountryByName(route.params.countryName.toString());
    // console.log(country.value);
    const countryName = route.params.countryName.toString();

    return { countryName };
  },
});
</script>

<style lang="scss" scoped></style>
