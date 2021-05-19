<template>
  <section class="box">
    <img :src="country.flag" alt="" srcset="" class="flag" />
    <div class="content">
      <h2 class="name">{{ country.name }}</h2>
      <p>Population: {{ country.population }}</p>
      <p>Region: {{ country.region }}</p>
      <p>Capital: {{ country.capital }}</p>
    </div>
  </section>
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
.box {
  width: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  background: $white;
  border-radius: 6px;
}

.flag {
  height: 50%;
  width: 100%;
}

.content {
  height: 50%;
  margin: 10px 20px;
  &.name {
    margin: 0;
  }
}
</style>
