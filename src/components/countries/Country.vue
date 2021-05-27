<template>
  <router-link
    :to="{ name: 'Country', params: { countryName: country.name } }"
    class="country-link"
  >
    <section class="box">
      <img :src="country.flag" alt="" srcset="" class="flag" />
      <div class="content">
        <h2 class="content__title">{{ country.name }}</h2>
        <p class="content__item">Population: {{ country.population }}</p>
        <p class="content__item">Region: {{ country.region }}</p>
        <p class="content__item">Capital: {{ country.capital }}</p>
      </div>
    </section>
  </router-link>
</template>

<script lang="ts">
import { CountryType } from "@/composables/useGetCountry";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    country: {
      type: Object as PropType<CountryType>,
      required: true,
    },
  },
  setup(props) {
    return { props };
  },
});
</script>

<style lang="scss" scoped>
.country-link {
  text-decoration: none;
  color: $veryDarkBlueLight;
  margin: 0 auto;
  &:visited {
    color: inherit;
  }
}
.box {
  width: 265px;
  min-height: 340px;
  padding: 0;
  display: flex;
  flex-direction: column;
  background: $white;
  border-radius: 6px;
}

.flag {
  height: 160px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  max-height: 200px;
  width: 100%;
}

.content {
  height: 50%;
  margin: 10px 20px;
  text-decoration: none;
  &__title {
    margin: 0;
  }
  &__item {
    text-decoration: none;
  }
}
</style>
