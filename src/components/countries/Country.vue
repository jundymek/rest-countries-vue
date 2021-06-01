<template>
  <router-link
    :to="{ name: 'Country', params: { countryName: country.name } }"
    class="country-link"
  >
    <section class="box">
      <div
        class="flag"
        :style="'background-image: url(' + country.flag + ')'"
      ></div>
      <div class="content">
        <h2 class="content__title">{{ country.name }}</h2>
        <p class="content__item"><span>Population:</span> {{ population }}</p>
        <p class="content__item"><span>Region:</span> {{ country.region }}</p>
        <p class="content__item"><span>Capital:</span> {{ country.capital }}</p>
      </div>
    </section>
  </router-link>
</template>

<script lang="ts">
import { CountryType } from "@/composables/useGetCountry";
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    country: {
      type: Object as PropType<CountryType>,
      required: true,
    },
  },
  setup(props) {
    const population = computed(() =>
      props.country.population.toLocaleString()
    );
    return { props, population };
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
  background-size: cover;
  height: 160px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  width: 100%;
}

.content {
  height: 50%;
  margin: 0 20px;
  text-decoration: none;
  &__title {
    margin: 20px 0;
    font-size: 18px;
  }
  &__item {
    text-decoration: none;
    margin: 5px 0;
    font-size: 14px;
    span {
      font-weight: 600;
    }
  }
}
</style>
