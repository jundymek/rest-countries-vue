<template>
  <div v-if="country" class="outer-wrapper">
    <router-link class="back-link" to="/">
      <img
        :src="require(`@/assets/arrow-back-outline.svg`)"
        alt=""
        width="20"
        height="20"
      />
      <span class="back-link__text">Back</span>
    </router-link>
    <div class="details-wrapper">
      <img :src="country[0].flag" alt="" srcset="" class="flag" />
      <div class="info-wrapper">
        <h2 class="title">{{ country[0].name }}</h2>
        <div class="info">
          <ul class="left">
            <li><span>Native name:</span> {{ country[0].nativeName }}</li>
            <li>
              <span>Population:</span>
              {{ country[0].population.toLocaleString() }}
            </li>
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
        <div class="borders">
          <span>Border Countries: </span>
          <router-link
            v-for="border in country[0].borders"
            :to="{
              name: 'Country',
              params: { countryName: countryCodes[border] },
            }"
            :key="countryCodes[border]"
            class="border-link"
          >
            {{ countryCodes[border] }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useGetCountry } from "@/composables/useGetCountry";
import { defineComponent, watch } from "vue";

export default defineComponent({
  props: ["countryName"],
  setup(props) {
    const { getCountryByName, country, countryCodes } = useGetCountry();
    getCountryByName(props.countryName);
    watch(
      () => props.countryName,
      () => getCountryByName(props.countryName)
    );
    return { country, countryCodes };
  },
});
</script>

<style lang="scss" scoped>
.outer-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 60px;
}

.back-link {
  width: 120px;
  height: 30px;
  font-family: "Nunito Sans", sans-serif;
  text-decoration: none;
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
  align-items: center;
  margin-top: 60px;
}

.flag {
  width: 50%;
  height: 50%;
  max-width: 378px;
  max-height: 270px;
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
}
span {
  font-weight: 600;
  font-size: 12px;
}

.borders {
  margin-top: 40px;
  display: flex;
  align-items: center;
}

.border-link {
  min-width: 80px;
  height: 20px;
  font-family: "Nunito Sans", sans-serif;
  display: flex;
  margin: 0 10px;
  padding: 2px 4px;
  text-decoration: none;
  color: $veryDarkBlue;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 12px;
  background: $veryLightGray;
  box-shadow: 0.5px 0.5px 2px 0.1px rgb(184, 182, 182);
}
</style>
