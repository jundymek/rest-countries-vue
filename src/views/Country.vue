<template>
  <country-details :countryName="countryName" />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import CountryDetails from "../components/countryDetails/CountryDetails.vue";

export default defineComponent({
  components: { CountryDetails },
  setup() {
    const route = useRoute();
    return { countryName: computed(() => route.params.countryName.toString()) };
  },
});
</script>

<style lang="scss" scoped></style>
