<template>
  <div v-if="country" class="outer-wrapper">
    <button class="button">
      <img
        :src="require(`@/assets/arrow-back-outline.svg`)"
        alt=""
        width="20"
        height="20"
      />
      <span class="button__text">Back</span>
    </button>
    <div class="details-wrapper">
      <img :src="country[0].flag" alt="" srcset="" class="flag" />
      <div class="info-wrapper">
        <h2 class="title">{{ country[0].name }}</h2>
        <div class="info">
          <ul class="left">
            <li><span>Native name:</span> {{ country[0].nativeName }}</li>
            <li><span>Population:</span> {{ country[0].population }}</li>
            <li><span>Region:</span> {{ country[0].region }}</li>
            <li><span>Sub region:</span> {{ country[0].subregion }}</li>
            <li><span>Capital:</span> {{ country[0].capital }}</li>
          </ul>
          <ul class="right">
            <li>
              <span>Top level domain:</span>
              {{ country[0].topLevelDomain.map((item) => item).join() }}
            </li>
            <li>
              <span>Currencies:</span>
              {{ country[0].currencies.map((item) => item.name).join() }}
            </li>
            <li>
              <span>Languages:</span>
              {{ country[0].languages.map((item) => item.name).join() }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useGetCountry } from "@/composables/useGetCountry";
import { defineComponent } from "vue";

export default defineComponent({
  props: ["countryName"],
  setup(props) {
    const { getCountryByName, country } = useGetCountry();
    getCountryByName(props.countryName);

    return { country };
  },
});
</script>

<style lang="scss" scoped>
.outer-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 60px;
}

.button {
  width: 120px;
  height: 30px;
  font-family: "Nunito Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  background: $veryLightGray;
  box-shadow: 0.5px 0.5px 2px 0.1px rgb(184, 182, 182);
  &__text {
    margin-left: 10px;
  }
}

.details-wrapper {
  display: flex;
  margin-top: 60px;
}

.flag {
  width: 50%;
  height: 50%;
  max-width: 560px;
  max-height: 400px;
}

.info-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 80px;
}

.info {
  display: flex;
}

.left,
.right {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 50%;
  font-size: 12px;
  li {
    padding: 4px 0;
  }
  span {
    font-weight: 600;
  }
}
</style>
