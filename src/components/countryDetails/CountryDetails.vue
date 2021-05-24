<template>
  <p v-if="country">{{ country[0].name }}</p>
</template>

<script lang="ts">
import { useGetCountry } from "@/composables/useGetCountry";
import { defineComponent } from "vue";

export default defineComponent({
  props: ["countryName"],
  setup(props) {
    const { getCountryByName, country } = useGetCountry();
    getCountryByName(props.countryName);
    console.log(country.value?.name);
    return { country };
  },
});
</script>

<style lang="scss" scoped></style>
